import styles from '../../styles/Home.module.css'
import Navbar from "../navbar";
import Head from "next/head";

export default function MyFavMovies() {
    return (
        <>
            <Head>
                <title>MyFavMovies</title>
            </Head>
            <div className={styles.background}/>
            <main className={styles.main}>
            <Navbar/>
                <div className={styles.project_overview_section}>
                    <div className={styles.overview}>
                        <h1>
                            MyFavMovies
                        </h1>
                        <h3>
                            JavaScript, Firebase, React
                        </h3>
                        <p>
                            MyFavMovies is a web application that allows you to search for movies and add them to your favorites.
                        </p>
                        <p>
                            The application is built using React and Firebase.
                        </p>
                        <a href="https://puckyeu.github.io/MyFavMovies">Try it Out</a>
                        <p></p>
                        <a href="https://github.com/PuckyEU/MyFavMovies">Source Code</a>
                    </div>
                </div>
        </main>
        </>
    )
}