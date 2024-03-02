import styles from "../../styles/Home.module.css";
import Head from "next/head";
import Navbar from "../../navbar";
import {Suspense, useEffect, useState} from "react";
import {
    fetchProjectsByTechnologies,
    fetchProjectsByYear,
    getAllTechnologiesSortedByFrequency,
    getAllYearsDescending,
    Project
} from "../project/[projectId]";
import ProjectOverview from "../../ProjectOverview";
import {useRouter} from "next/router";
import {func} from "prop-types";
// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useSearchParams} from "next/navigation";

function AllProjects() {
    const [selectedTechnologyTags, setSelectedTechnologyTags] = useState<string[]>([]);
    const [selectedYearTags, setSelectedYearTags] = useState<string[]>([]);
    const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
    const [technologies, setTechnologies] = useState<[string, number][]>();
    const [years, setYears] = useState<string[]>();
    const searchParams = useSearchParams();
    const technologyQuery = searchParams.get("technology");
    const yearQuery = searchParams.get("year");
    const router = useRouter();

    useEffect(() => {
        getQuery().then(r => {});
    }, [technologyQuery, yearQuery]);

    async function getQuery() {
        const technologies = await getAllTechnologies();
        const years = await getAllYears();

        /**
         * Parses the query string and returns an array of technologies
         * Must be in the format of "technology1,technology2,technology3"
         * "getAllYears()" must be called before this function
         * @param query
         */
        function parseQuery(query: string | undefined | null) {
            if (typeof query === "string") {
                let array = query.split(",");
                array.forEach((element, index) => {
                    technologies?.forEach((technology) => {
                        if (technology[0].trim().toLowerCase() === element.trim().toLowerCase()) {
                            technologyTagClicked(technology[0]);
                        } else if (technology[0].trim() === "C#" && element.trim().toLowerCase() === "c-sharp") {
                            technologyTagClicked("C#");
                        }
                    });
                    years?.forEach((year) => {
                        if (year.trim().toLowerCase() === element.trim().toLowerCase()) {
                            yearTagClicked(year);
                        }
                    });
                });
            }
        }

        // Call parseQuery with the query parameters
        parseQuery(technologyQuery?.toString());
        parseQuery(yearQuery?.toString());
    }

    useEffect(() => {
        getAllTechnologies();
        getAllYears();
        AOS.init();
    }, []);

    useEffect(() => {
        const filterProjects = async () => {
            const technologies = selectedTechnologyTags.map((tech) => tech.trim());
            const years = selectedYearTags.map((year) => year.trim());

            const filteredTechnologyProjects = await fetchProjectsByTechnologies(technologies);
            const filteredYearProjects = await fetchProjectsByYear(years);

            function findIntersection(array1: Project[], array2: Project[]): Project[] {
                return array1.filter((value1) => {
                    return array2.find((value2) => value1.id === value2.id);
                });
            }

            const filteredProjects= findIntersection(filteredTechnologyProjects, filteredYearProjects);
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
                tagParent.classList.remove("tag_selected");
            }

            return prevTags.filter((t) => t !== tag);
        } else {
            const tagParent = document.getElementById(tag);
            if (tagParent) {
                tagParent.style.backgroundColor = "#ffffff";
                tagParent.style.color = "#131313"
                tagParent.classList.add("tag_selected");
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
        return technologies;
    }

    async function getAllYears() {
        let years = await getAllYearsDescending();
        setYears(years);
        return years;
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
                    <h2 className={styles.tags_title} data-aos="fade-right" data-aos-delay="50">Technology</h2>
                    <div className={styles.tags} data-aos="fade-right" data-aos-delay="50">
                        {technologies && technologies.map((technology, key) => (
                            <div id={technology[0]} key={key} className={styles.tag} onClick={() => technologyTagClicked(technology[0])} data-aos="fade-right" data-aos-delay={key * 50}>{technology[0]} ({technology[1]})</div>
                        ))}
                    </div>
                    <h2 className={styles.tags_title} data-aos="fade-right" data-aos-delay="50">Year</h2>
                    <div className={styles.tags} data-aos="fade-right" data-aos-delay="50">
                        {years && years.map((year, key) => (
                            <div id={year} key={key} className={styles.tag} onClick={() => yearTagClicked(year)} data-aos="fade-right" data-aos-delay={key * 50}>{year}</div>
                        ))}
                    </div>

                    {filteredProjects && filteredProjects.map((project, id) => (
                        <ProjectOverview key={id} project={project} id={id} isMovie={false}></ProjectOverview>
                    ))}
                </div>
            </main>
        </>
    )
}

export default function ProjectsSuspense() {
    return <>
        <Suspense>
            <AllProjects/>
        </Suspense>
    </>
}