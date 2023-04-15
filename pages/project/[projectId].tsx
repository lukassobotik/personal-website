import { useRouter } from "next/router"
import {useEffect, useState} from "react";
import {it} from "node:test";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Navbar from "../../navbar";

interface Project {
    id: string;
    name: string;
    technologies: string;
    description: Record<string, string>;
    links: Record<string, { name: string, url: string }>;
}
export default function Project() {
    const router = useRouter();
    const projectId = router.query.projectId;
    const [project, setProject] = useState<Project>();

    useEffect(() => {
        async function fetchProjects() {
            const res = await fetch('/projects.json');
            const data = await res.json();

            const projectArray = Object.values<Project>(data);
            const project = projectArray.find(item => item.id === projectId);
            if (project) {
                setProject(project);
            }
        }

        fetchProjects().then(() => {});
    }, [projectId]);

    return (
        <>
            <Head>
                <title>{project?.name}</title>
            </Head>
            <main className={styles.main}>
                <Navbar/>
                <div className={styles.project_overview_section}>
                    <div className={styles.overview}>
                        <h1>
                            {project?.name}
                        </h1>
                        <h3>
                            {project?.technologies}
                        </h3>
                        {project?.description && Object.keys(project.description).map((key) => (
                            <p key={key}>{project.description[key]}</p>
                        ))}
                        <div className={styles.project_link}>
                            {project?.links && Object.keys(project.links).map((key) => (
                                <a key={key} href={project.links[key].url} className={styles.skill}>{project.links[key].name}</a>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}