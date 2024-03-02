import styles from "../../styles/Home.module.css";
import Link from "next/link";
import React, {useEffect} from "react";
import Navbar from "../../navbar";
import ProjectOverview from "../../ProjectOverview";
import {fetchMovieById, fetchMovies, Movie} from "../movie/[movieId]";

export default function Movies() {
    const [movies, setMovies] = React.useState<Movie[]>();

    useEffect(() => {
        fetchMovies().then((movies) => {
            const ids: string[] = movies.map((project) => project.id);

            Promise.all(ids.map((id) => fetchMovieById(id)))
                .then((fetchedMovies) => {
                    const allProjects = fetchedMovies.filter((movie) => !!movie) as Movie[];
                    setMovies(allProjects);
                    console.log(allProjects);
                })
                .catch((error) => {
                    console.error(error);
                });
        });
    }, []);

    return (
        <>
            <main className={styles.main}>
                <Navbar />
                {movies && movies.map((movie, id) => (
                    <ProjectOverview key={id} project={movie} id={id} isMovie={true}></ProjectOverview>
                ))}
            </main>
        </>
    )
}