import styles from "../styles/Home.module.css";
import Link from "next/link";
import {useEffect, useState} from "react";
import {fetchProjectById, fetchProjectsByFeatured, Project} from "./project/[projectId]";// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function FetchProjects({onlyFeatured}: {onlyFeatured: boolean}) {
    const [projects, setProjects] = useState<Project[]>();

    useEffect(() => {
        fetchProjectsByFeatured(onlyFeatured).then((projects) => {
            const ids: string[] = projects.map((project) => project.id);

            Promise.all(ids.map((id) => fetchProjectById(id)))
                .then((fetchedProjects) => {
                    const allProjects = fetchedProjects.filter((project) => !!project) as Project[];
                    setProjects(allProjects);
                    console.log(allProjects);
                })
                .catch((error) => {
                    console.error(error);
                });
        });
        AOS.init()
    }, [onlyFeatured]);

    return (
        <>
            <div className={styles.featured_projects_section}>
                {projects && projects.map((project, id) => (
                    <div key={id} className={styles.main_featured_project} data-aos="fade-up" data-aos-delay={`${id}00`} data-aos-once="true">
                        <div className={styles.main_featured_project_info}>
                            <div className={styles.main_featured_project_info_title}>
                                <div className={styles.main_featured_project_info_title_year}>{project.year ? project.year : "Year"}</div>
                                <div className={styles.main_featured_project_info_title_text}><Link href={"/project/" + project.id} className={styles.url}>{project.name}</Link></div>
                            </div>
                            <div className={styles.main_featured_project_other_info}>
                                <div className={styles.main_featured_project_other_info_description}>
                                    <div className={styles.main_featured_project_other_info_title}>Description</div>
                                    {project?.shortDescription && Object.keys(project.shortDescription).map((key) => (
                                        <div key={key} className={styles.main_featured_project_other_info_text}>{project.shortDescription[key]}</div>
                                    ))}
                                </div>
                                <div className={styles.main_featured_project_other_info_technologies}>
                                    <div className={styles.main_featured_project_other_info_title}>Technologies</div>
                                    {project?.technologies && splitTechnologies(project?.technologies).map((technology, key) => (
                                        <div key={key} className={styles.main_featured_project_other_info_text}>{technology}</div>
                                    ))}
                                </div>
                                <div className={styles.main_featured_project_other_info_links}>
                                    <div className={styles.main_featured_project_other_info_title}>Links</div>
                                    {project?.links && Object.keys(project.links).map((key) => (
                                        <div key={key} className={styles.main_featured_project_other_info_text}><a href={project.links[key].url} className={styles.url}>{project.links[key].name}</a></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className={styles.main_featured_project_pictures}>

                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export function splitTechnologies(technologies: string) {
    return technologies.split(", ");
}