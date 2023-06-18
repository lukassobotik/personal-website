import {useRouter} from "next/router"
import {useEffect, useState} from "react";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Navbar from "../../navbar";
import Image from "next/image";
import useSwr from "swr";
import {fetcher} from "../index";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export interface Project {
    featured: boolean;
    id: string;
    logoUrl: string;
    year: string;
    name: string;
    technologies: string;
    shortDescription: Record<string, string>;
    description: Record<string, string>;
    links: Record<string, { name: string, url: string }>;
    hasHorizontalScreenshots: boolean;
    horizontalScreenshots: {
        width: number;
        height: number;
        urls: Record<string, string>;
    };
    hasVerticalScreenshots: boolean;
    verticalScreenshots: {
        width: number;
        height: number;
        urls: Record<string, string>;
    };
    license: { type: string; url: string; };
}
export default function Project() {
    const router = useRouter();
    const projectId = router.query.projectId;
    const [project, setProject] = useState<Project>();
    const {data} = useSwr('/api/getReadme/' + projectId, fetcher);

    useEffect(() => {
        fetchProjectById(projectId).then((project) => {setProject(project)});
    }, [projectId]);

    function renderScreenshots(urls: Record<string, string>, width: number, height: number) {
        return Object.keys(urls).map((key) => (
            <Image key={key} src={urls[key]} alt="" width={width} height={height} />
        ));
    }

    return (
        <>
            <Head>
                <title>{project?.name}</title>
            </Head>
            <main className={styles.main}>
                <Navbar/>
                <div className={styles.project_overview_section}>
                    <div className={styles.overview}>
                        {project?.logoUrl ? <Image src={project.logoUrl} alt="" width={150} height={150} className={styles.project_image}/> : null}
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
                        <div className={styles.project_link}>
                            {project?.license ? <a href={project.license.url} className={styles.skill}>{project.license.type}</a> : null}
                        </div>
                        {project?.hasHorizontalScreenshots ?
                            <div className={styles.horizontal_project_images}>
                                {renderScreenshots(project.horizontalScreenshots.urls, project.horizontalScreenshots.width, project.horizontalScreenshots.height)}
                            </div>
                        : null}
                        {project?.hasVerticalScreenshots ?
                            <div className={styles.vertical_project_images}>
                                {renderScreenshots(project.verticalScreenshots.urls, project.verticalScreenshots.width, project.verticalScreenshots.height)}
                            </div>
                            : null}
                    </div>
                </div>

                <div className="readme-container" id={"readme_container"}>
                    <ReactMarkdown remarkPlugins={[remarkGfm]} skipHtml={true} components={{
                        ol: ({node, ...props}) => {
                            return <ol {...props} style={{marginLeft: "2rem"}} />
                        },
                        ul: ({node, ...props}) => {
                            return <ul {...props} style={{marginLeft: "2rem"}} />
                        },
                        h1: ({node, ...props}) => {
                            return <h1 {...props} style={{marginTop: "2rem"}} />
                        },
                        h2: ({node, ...props}) => {
                            return <h2 {...props} style={{marginTop: "2rem"}} />
                        },
                        code: ({node, ...props}) => {
                            if (props?.inline) return <code {...props} className={styles.inline_code} />
                            else return <code {...props} className={styles.block_code} />
                        },
                    }}>{data?.readmeContents ? data?.readmeContents : null}</ReactMarkdown>
                </div>
            </main>
        </>
    )
}

export async function fetchProjectById(projectId : string | string[] | undefined) {
    const res = await fetch('/projects.json');
    const data = await res.json();

    const projectArray = Object.values<Project>(data);
    const project = projectArray.find(item => item.id === projectId);
    if (project) {
        return project;
    }
}

export async function fetchProjectsByFeatured(featured : boolean) {
    const res = await fetch('/projects.json');
    const data = await res.json();
    const projectArray = Object.values<Project>(data);
    if (featured) {
        return projectArray.filter((project: Project) => project.featured);
    } else {
        return projectArray.filter((project: Project) => !project.featured);
    }
}