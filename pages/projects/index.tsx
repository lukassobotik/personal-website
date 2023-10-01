import FetchProjects from "../FetchProjects";
import styles from "../../styles/Home.module.css";
import Head from "next/head";
import Navbar from "../../navbar";
import {ChangeEvent, useEffect, useState} from "react";
import {
    fetchProjectsByTechnologies, fetchProjectsByYear,
    getAllTechnologiesSortedByFrequency,
    getAllYearsDescending,
    Project
} from "../project/[projectId]";
import ProjectOverview from "../../ProjectOverview";

export default function AllProjects() {
    const [selectedTechnologyTags, setSelectedTechnologyTags] = useState<string[]>([]);
    const [selectedYearTags, setSelectedYearTags] = useState<string[]>([]);
    const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
    const [technologies, setTechnologies] = useState<[string, number][]>();
    const [years, setYears] = useState<string[]>();

    useEffect(() => {
        getAllTechnologies();
        getAllYears();

        fetchProjectsByYear(["2022"]).then((projects) => console.log("PROEJCT : " + projects));
    }, []);

    useEffect(() => {
        console.log("TAG SELECTED ", selectedTechnologyTags);
        const filterProjects = async () => {
            const technologies = selectedTechnologyTags.map((tech) => tech.trim());
            const years = selectedYearTags.map((year) => year.trim());

            const filteredTechnologyProjects = await fetchProjectsByTechnologies(technologies);
            const filteredYearProjects = await fetchProjectsByYear(years);

            function func(arr1: Project[], arr2: Project[]): Project[] {
                return arr1.filter((val1) => {
                    return arr2.find((val2) => val1.id === val2.id);
                });
            }

            const filteredProjects = func(filteredTechnologyProjects, filteredYearProjects);
            console.log("FILTERING PROJECTS: " + "TECHNOLOGIES: " + technologies + " YEARS: " + years + " RESULT: " + filteredProjects);
            setFilteredProjects(filteredProjects);
        };

        filterProjects();
    }, [selectedTechnologyTags, selectedYearTags]);

    function addAndRemoveTags(tag : string, prevTags: string[]) {
        if (prevTags.includes(tag)) {
            const tagParent = document.getElementById(tag);
            if (tagParent) {
                tagParent.style.backgroundColor = "#131313";
                tagParent.style.color = "#ffffff"
            }

            return prevTags.filter((t) => t !== tag);
        } else {
            const tagParent = document.getElementById(tag);
            if (tagParent) {
                tagParent.style.backgroundColor = "#ffffff";
                tagParent.style.color = "#131313"
            }

            return [...prevTags, tag];
        }
    }

    function technologyTagClicked(tag : string) {
        setSelectedTechnologyTags((prevTags) => {
            return addAndRemoveTags(tag, prevTags);
        });

    }
    function yearTagClicked(tag : string) {
        setSelectedYearTags((prevTags) => {
            return addAndRemoveTags(tag, prevTags);
        });
    }

    async function getAllTechnologies() {
        let technologies = await getAllTechnologiesSortedByFrequency();
        setTechnologies(technologies);
    }

    async function getAllYears() {
        let years = await getAllYearsDescending();
        setYears(years);
    }

    return (
        <>
            <Head>
                <title>Projects</title>
            </Head>
            <main className={styles.main}>
                <Navbar/>
                <div className={styles.featured_projects_section}>
                    <h1 className={styles.tags_title}>Projects Filter ({filteredProjects.length} Project{filteredProjects.length == 1 ? "" : "s"})</h1>
                    <h2 className={styles.tags_title}>Technology</h2>
                    <div className={styles.tags}>
                        {technologies && technologies.map((technology, key) => (
                            <div id={technology[0]} key={key} className={styles.tag} onClick={() => technologyTagClicked(technology[0])}>{technology[0]} ({technology[1]})</div>
                        ))}
                    </div>
                    <h2 className={styles.tags_title}>Year</h2>
                    <div className={styles.tags}>
                        {years && years.map((year, key) => (
                            <div id={year} key={key} className={styles.tag} onClick={() => yearTagClicked(year)}>{year}</div>
                        ))}
                    </div>

                    {filteredProjects && filteredProjects.map((project, id) => (
                        <ProjectOverview key={id} project={project} id={id}></ProjectOverview>
                    ))}
                </div>
            </main>
        </>
    )
}