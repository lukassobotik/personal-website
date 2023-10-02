import styles from "../styles/Home.module.css";
import {useEffect, useState} from "react";
import {fetchProjectById, fetchProjectsByFeatured, Project} from "./project/[projectId]"; // @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProjectOverview from "../ProjectOverview";

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
                    <ProjectOverview key={id} project={project} id={id}></ProjectOverview>
                ))}
            </div>
        </>
    )
}