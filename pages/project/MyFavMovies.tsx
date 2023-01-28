import styles from '../../styles/Home.module.css'
import Navbar from "../navbar";
import Head from "next/head";
import Image from "next/image";

export default function MyFavMovies() {
    return (
        <>
            <Head>
                <title>MyFavMovies</title>
            </Head>
            <main className={styles.main}>
            <Navbar/>
                <div className={styles.project_overview_section}>
                    <div className={styles.overview}>
                        <Image src="/images/MyFavMovies/MyFavMovies.png" alt="" width={150} height={150} className={styles.project_image}/>
                        <h1>
                            MyFavMovies
                        </h1>
                        <h3>
                            JavaScript, Firebase, React, TMDb API
                        </h3>
                        <p>
                            MyFavMovies is a web application that allows you to search for movies and add them to your favorites.
                        </p>
                        <p>
                            It uses the <a href="https://www.themoviedb.org/">The Movie Database API</a> to fetch the movies.
                        </p>
                        <p>
                            You can create an account and login to save your favorite movies or save them to collections that you created.
                            You can also set your language and region preferences. The application will use them to fetch the movies in your language and region.
                            You can set a profile picture and a username.
                            The application is fully responsive and works on mobile devices.
                            This application was my first project using React and developing a web application in general.
                        </p>
                        <div className={styles.project_link}>
                            <a href="https://lukassobotik.dev/MyFavMovies/" className={styles.skill}>Try it Out</a>
                            <a href="https://github.com/PuckyEU/MyFavMovies" className={styles.skill}>Source Code</a>
                        </div>
                        <div className={styles.horizontal_project_images}>
                            <Image src="/images/MyFavMovies/sc-1.png" alt="" width={1000} height={540}/>
                            <Image src="/images/MyFavMovies/sc-2.png" alt="" width={1000} height={540}/>
                            <Image src="/images/MyFavMovies/sc-3.png" alt="" width={1000} height={540}/>
                            <Image src="/images/MyFavMovies/sc-4.png" alt="" width={1000} height={540}/>
                            <Image src="/images/MyFavMovies/sc-5.png" alt="" width={1000} height={540}/>
                        </div>
                    </div>
                </div>
        </main>
        </>
    )
}