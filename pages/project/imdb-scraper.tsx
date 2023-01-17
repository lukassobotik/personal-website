import styles from '../../styles/Home.module.css'
import Navbar from "../navbar";
import Head from "next/head";

export default function imdbScraper() {
    return (
        <>
            <Head>
                <title>IMDb Scraper</title>
            </Head>
            <div className={styles.background}/>
            <main className={styles.main}>
                <Navbar/>
                <div className={styles.project_overview_section}>
                    <div className={styles.overview}>
                        <h1>
                            IMDb Scraper
                        </h1>
                        <h3>
                            Java, JSoup
                        </h3>
                        <p>
                            IMDb Scraper is a simple Java application that scrapes the top 250 section on the IMDb website.
                        </p>
                        <div className={styles.project_link}><a href="https://github.com/PuckyEU/imdb-scraper">Source Code</a></div>
                    </div>
                </div>
            </main>
        </>
    )
}