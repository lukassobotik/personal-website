import {useRouter} from "next/router"
import {useEffect, useState} from "react";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Navbar from "../../navbar";
import Image from "next/image";
import useSwr from "swr";
import {fetcher} from "../index";
import MarkdownContainer from "../../MarkdownContainer";
import Link from "next/link";
// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';

export interface Project {
    featured: boolean;
    id: string;
    github_id: string;
    logoUrl: string;
    year: string;
    name: string;
    technologies: Record<string, string>;
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
    trailerUrl: string;
    license: { type: string; url: string; };
}
export default function Project() {
    const router = useRouter();
    const projectId = router.query.projectId;
    const [project, setProject] = useState<Project>();
    const [showingTrailer, setShowingTrailer] = useState(false);
    const githubId = project?.github_id ? project?.github_id : projectId;

    useEffect(() => {
        fetchProjectById(projectId).then((project) => {setProject(project)});
        AOS.init();
    }, [projectId]);

    const { data : readmeData } = useSwr('/api/getReadme/' + githubId, fetcher);
    const { data : repoData } = useSwr('/api/getRepo/' + githubId, fetcher);
    const { data : commitData } = useSwr('/api/getCommits/' + githubId, fetcher);

    /**
     * The `renderScreenshots` function is responsible for rendering the screenshots of a project.
     * It takes a record of URLs, width and height as parameters and returns an array of Image components.
     *
     * @param {Record<string, string>} urls - A record of URLs where each key is the identifier of the image and the value is the URL of the image.
     * @param {number} width - The width of the image.
     * @param {number} height - The height of the image.
     * @returns {JSX.Element[]} An array of Image components with the specified width and height, and source set to the provided URLs.
     */
    function renderScreenshots(urls: Record<string, string>, width: number, height: number): JSX.Element[] {
        return Object.keys(urls).map((key) => (
            <Image key={key} src={urls[key]} alt="" width={width} height={height} />
        ));
    }

    function showTrailer() {
        if (project?.trailerUrl) {
            setShowingTrailer(!showingTrailer);
        }
    }

    function escapeTrailer() {
        if (showingTrailer) {
            setShowingTrailer(false);
        }
    }

    return (
        <>
            <Head>
                <title>{project?.name}</title>
            </Head>
            <main className={styles.main} onClick={escapeTrailer}>
                <Navbar/>
                <div className={styles.project_overview_section}>
                    {showingTrailer ? <div className={styles.trailer_back} onClick={showTrailer}>x</div> : null}
                    {showingTrailer ? <div className={styles.trailer} data-aos="fade-up">
                            <iframe width="1920" height="1080"
                                    src={`https://www.youtube.com/embed/${project?.trailerUrl}?rel=0&amp;autoplay=1`}
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen>
                            </iframe>
                        </div>
                        : null}
                    <div className={styles.overview}>
                        {project?.logoUrl ? <Image src={project.logoUrl} alt="" width={150} height={150} className={styles.project_image}/> : null}
                            <div className={styles.project_header}>
                                <div className={styles.main_featured_project_info_title}>
                                    <div
                                        className={styles.main_featured_project_info_title_year}>{project?.year ? project.year : "Year"}</div>
                                    <div className={styles.main_featured_project_info_title_text}>{project?.name}</div>
                                    {project?.trailerUrl ?
                                        <div className={styles.main_featured_project_info_title_trailer} onClick={showTrailer}>Play Trailer</div>
                                    : null}
                                </div>
                                {commitData ? <div className={styles.project_header_github_info} data-aos="fade-left">
                                    <div><Link className={styles.url}
                                               href={"https://github.com/lukassobotik/" + githubId + "/commits"}>{commitData?.length} {commitData?.length == 1 ? "Commit" : "Commits"}</Link>
                                    </div>
                                    <div><Link className={styles.url}
                                               href={"https://github.com/lukassobotik/" + githubId + "/issues"}>{repoData?.open_issues} {repoData?.open_issues == 1 ? "Issue" : "Issues"}</Link>
                                    </div>
                                    <div><Link className={styles.url}
                                               href={"https://github.com/lukassobotik/" + githubId + "/stargazers"}>{repoData?.stargazers_count} {repoData?.stargazers_count == 1 ? "Star" : "Stars"}</Link>
                                    </div>
                                    <div><Link className={styles.url}
                                               href={"https://github.com/lukassobotik/" + githubId + "/forks"}>{repoData?.forks_count} {repoData?.forks_count == 1 ? "Fork" : "Forks"}</Link>
                                    </div>
                                </div> : null}
                            </div>
                            <h3 className={styles.project_technologies}>
                                {project?.technologies && Object.keys(project.technologies).map((key) => {
                                        return project.technologies[key]
                                    }
                                ).join(", ")}
                            </h3>
                            <div className={styles.project_paragraph_parent}>
                                {project?.description && Object.keys(project.description).map((key) => (
                                    <p className={styles.overview_paragraph} key={key}>{project.description[key]}</p>
                                ))}
                            </div>
                            <div className={styles.project_link}>
                                {project?.links && Object.keys(project.links).map((key) => (
                                    <a key={key} href={project.links[key].url}
                                       className={styles.skill}>{project.links[key].name}</a>
                                ))}
                            </div>
                            {readmeData ? <div className={styles.project_readme} data-aos="fade-up">
                                <div className={styles.project_readme_title}><span>README.md</span></div>
                                <MarkdownContainer data={readmeData}/>
                            </div> : null}

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
                        </main>
                        </>
                        )
                    }

                    function sortProjectsByFeatured(filteredProjects: Project[]) {
                    return filteredProjects.sort((a, b) => {
                    if (a.featured && !b.featured) {
                    return -1; // Move "a" (featured) before "b" (not featured)
                } else if (!a.featured && b.featured) {
            return 1; // Move "b" (featured) before "a" (not featured)
        } else {
            return 0; // Leave the order unchanged
        }
    });
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

export async function fetchProjectsByTechnologies(technologies: string | string[]) {
    const res = await fetch('/projects.json');
    const data = await res.json();
    const projectArray = Object.values<Project>(data);

    const technologyArray = Array.isArray(technologies) ? technologies : [technologies];

    if (!technologies) {
        return projectArray;
    }

    const filteredProjects = projectArray.filter((project) => {
        const projectTechnologies = Object.values(project.technologies);
        return technologyArray.every((tech) => projectTechnologies.includes(tech));
    });

    return sortProjectsByFeatured(filteredProjects);
}

export async function getAllTechnologiesSortedByFrequency() {
    const allTechnologies: string[] = [];
    const res = await fetch('/projects.json');
    const data = await res.json();
    const projectArray = Object.values<Project>(data);

    for (const project of projectArray) {
        const projectTechnologies: string[] = Object.values(project.technologies);
        allTechnologies.push(...projectTechnologies);
    }

    const technologyFrequencyMap = new Map<string, number>();

    for (const technology of allTechnologies) {
        if (technologyFrequencyMap.has(technology)) {
            technologyFrequencyMap.set(technology, technologyFrequencyMap.get(technology)! + 1);
        } else {
            technologyFrequencyMap.set(technology, 1);
        }
    }

    // Sort technologies by frequency in descending order
    return Array.from(technologyFrequencyMap.entries()).sort((a, b) => b[1] - a[1]);
}

export async function fetchProjectsByYear(year: string | string[]) {
    const res = await fetch('/projects.json');
    const data = await res.json();
    const projectArray = Object.values<Project>(data);

    const technologyArray = Array.isArray(year) ? year : [year];

    if (!year) {
        return projectArray;
    }

    const filteredProjects = projectArray.filter((project) => {
        return technologyArray.every((year) => project.year === year);
    });

    return sortProjectsByFeatured(filteredProjects);
}

export async function getAllYearsDescending() {
    const uniqueYearsSet = new Set<string>();
    const res = await fetch('/projects.json');
    const data = await res.json();
    const projectArray = Object.values<Project>(data);

    for (const project of projectArray) {
        const projectYear = project.year;
        if (projectYear) {
            uniqueYearsSet.add(projectYear);
        }
    }

    return Array.from(uniqueYearsSet).sort((a, b) => {
        return parseInt(b, 10) - parseInt(a, 10);
    });
}