import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Navbar from "../../navbar";
import styles from "../../styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import MarkdownContainer from "../../MarkdownContainer";

export interface Movie {
    id: string;
    year: string;
    title: string;
    genres: Record<string, string>;
    shortDescription: Record<string, string>;
    description: Record<string, string>;
    links: Record<string, { name: string, url: string }>;
    url: string;
}

export default function Movie() {
    const [movie, setMovie] = useState<Movie>();
    const router = useRouter();
    const movieId = router.query.movieId;

    useEffect(() => {
        if (!movieId) return;

        fetchMovieById(movieId).then((movie) => {
            setMovie(movie);
        });
    }, [movieId]);

    return (
        <>
            <Head>
                <title>{movie?.title}</title>
            </Head>
            <main className={styles.main}>
                <Navbar/>
                <div className={styles.project_overview_section}>
                    <div className={styles.overview}>
                        <div className={styles.project_header}>
                            <div className={styles.main_featured_project_info_title}>
                                <div
                                    className={styles.main_featured_project_info_title_year}>{movie?.year ? movie.year : "Year"}</div>
                                <div className={styles.main_featured_project_info_title_text}>{movie?.title}</div>
                            </div>
                        </div>
                        <h3 className={styles.project_technologies}>
                            {movie?.genres && Object.keys(movie.genres).map((key) => {
                                return movie.genres[key]
                            }).join(", ")}
                        </h3>
                        <div className={styles.project_paragraph_parent}>
                            {movie?.description && Object.keys(movie.description).map((key) => (
                                <p className={styles.overview_paragraph} key={key}>{movie.description[key]}</p>
                            ))}
                        </div>
                        <div className={styles.project_link}>
                            {movie?.links && Object.keys(movie.links).map((key) => (
                                <a key={key} href={movie.links[key].url}
                                   className={styles.skill}>{movie.links[key].name}</a>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export async function fetchMovies() {
    const res = await fetch('/movies.json');
    const data = await res.json();
    return Object.values<Movie>(data);
}

export async function fetchMovieById(movieId: string | string[] | undefined) {
    const res = await fetch('/movies.json');
    const data = await res.json();

    const movieArray = Object.values<Movie>(data);
    const project = movieArray.find(item => item.id === movieId);
    if (project) {
        return project;
    }
}