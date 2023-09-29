import styles from "./styles/Home.module.css";
import Link from "next/link";
import {Project} from "./pages/project/[projectId]";
// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";

export default function ProjectOverview({project, id} : {project : Project, id : number}) {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div key={id} className={styles.main_featured_project} data-aos="fade-up" data-aos-delay={id * 50} data-aos-once="true">
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
                        {project?.technologies && Object.keys(project.technologies).map((key) => (
                            <div key={key} className={styles.main_featured_project_other_info_text}>{project.technologies[key]}</div>
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
    )
}