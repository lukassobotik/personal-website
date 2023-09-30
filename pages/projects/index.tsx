import FetchProjects from "../FetchProjects";
import styles from "../../styles/Home.module.css";
import Head from "next/head";
import Navbar from "../../navbar";
import {ChangeEvent, useEffect, useState} from "react";
import {
    fetchProjectsByTechnologies,
    getAllTechnologiesSortedByFrequency,
    getAllYears,
    Project
} from "../project/[projectId]";
import ProjectOverview from "../../ProjectOverview";

export default function AllProjects() {
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
    const [technologies, setTechnologies] = useState<[string, number][]>();

    useEffect(() => {
        getAllTechnologies();
        getAllYears().then((i) => console.log(i));
    }, []);

    useEffect(() => {
        console.log("TAG SELECTED ", selectedTags);
        const filterProjects = async () => {
            const technologies = selectedTags.map((tech) => tech.trim());

            // Fetch and filter projects based on the entered technologies
            const filteredProjects = await fetchProjectsByTechnologies(technologies);
            setFilteredProjects(filteredProjects);
        };

        filterProjects();
    }, [selectedTags]);

    function tagClicked(tag : string) {
        setSelectedTags((prevTags) => {
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
        });
    }

    async function getAllTechnologies() {
        let technologies = await getAllTechnologiesSortedByFrequency();
        setTechnologies(technologies);
    }

    return (
        <>
            <Head>
                <title>Projects</title>
            </Head>
            <main className={styles.main}>
                <Navbar/>
                <div className={styles.featured_projects_section}>
                    <h1 className={styles.tags_title}>Filter Projects by Technology ({filteredProjects.length} Project{filteredProjects.length == 1 ? "" : "s"})</h1>
                    <div className={styles.tags}>
                        {technologies && technologies.map((technology, key) => (
                            <div id={technology[0]} key={key} className={styles.tag} onClick={() => tagClicked(technology[0])}>{technology[0]} ({technology[1]})</div>
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