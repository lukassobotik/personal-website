import styles from "./styles/Home.module.css";
import Link from "next/link";
import {Project} from "./pages/project/[projectId]";
// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";
import {Movie} from "./pages/movie/[movieId]";

export default function ProjectOverview({project, id, isMovie} : {project : Project | Movie, id : number, isMovie : boolean}) {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div key={id} className={styles.main_featured_project} data-aos="fade-up" data-aos-delay={id * 50} data-aos-once="true">
            <div className={styles.main_featured_project_info}>
                <div className={styles.main_featured_project_info_title}>
                    <div className={styles.main_featured_project_info_title_year}>{project.year ? project.year : "Year"}</div>
                    {!isMovie ?
                        <div className={styles.main_featured_project_info_title_text}><Link href={"/project/" + project.id} className={styles.url}>{(project as Project).name}</Link></div>
                        :
                        <div className={styles.main_featured_project_info_title_text}><Link href={"/movie/" + project.id} className={styles.url}>{(project as Movie).title}</Link></div>
                    }
                </div>
                <div className={styles.main_featured_project_other_info}>
                    <div className={styles.main_featured_project_other_info_description}>
                        <div className={styles.main_featured_project_other_info_title}>Description</div>
                        {project?.shortDescription && Object.keys(project.shortDescription).map((key) => (
                            <div key={key} className={styles.main_featured_project_other_info_text}>{project.shortDescription[key]}</div>
                        ))}
                    </div>
                    <div className={styles.main_featured_project_other_info_technologies}>
                        {!isMovie ?
                            <div>
                                <div className={styles.main_featured_project_other_info_title}>Technologies</div>
                                {(project as Project)?.technologies && Object.keys((project as Project).technologies).map((key) => (
                                    <div key={key} className={styles.main_featured_project_other_info_text}>{(project as Project).technologies[key]}</div>
                                ))}
                            </div>
                            :
                            <div>
                                <div className={styles.main_featured_project_other_info_title}>Genres</div>
                                {(project as Movie)?.genres && Object.keys((project as Movie).genres).map((key) => (
                                    <div key={key} className={styles.main_featured_project_other_info_text}>{(project as Movie).genres[key]}</div>
                                ))}
                            </div>
                        }
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