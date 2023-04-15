import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import {useEffect, useState} from "react";
import {fetchProjects, Project} from "./project/[projectId]";

export default function FeaturedProjects() {
    const [projects, setProjects] = useState<Project[]>();
    const [allProjectsFetched, setAllProjectsFetched] = useState<boolean>(false);

    useEffect(() => {
        const projectIds = ["myQuotes", "WidgetSchedule", "MyFavMovies", "vsem-schedule-change-notifier", "TaskLooper"];
        let allProjects: Project[] = [];

        Promise.all(projectIds.map((id) => fetchProjects(id)))
            .then((fetchedProjects) => {
                allProjects = fetchedProjects.filter((project) => !!project) as Project[];
                setProjects(allProjects);
                setAllProjectsFetched(true);
                console.log(allProjects);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    if (!allProjectsFetched) {
        return <div>Loading projects...</div>;
    }

    return (
        <>
            {projects && projects.map((project, id) => (
                <Link href={"/project/" + project.id} className={styles.project_post} key={id}>
                    <Image src={project.logoUrl} alt="" width={150} height={150} className={styles.featured_project_image}/>
                    <div className={styles.post_text}>
                        <h2>{project.name}</h2>
                        <h4>
                            {project.technologies}
                        </h4>
                        {project?.featuredDescription && Object.keys(project.featuredDescription).map((key) => (
                            <p key={key}>{project.featuredDescription[key]}</p>
                        ))}
                    </div>
                </Link>
            ))}
        </>
    )
}