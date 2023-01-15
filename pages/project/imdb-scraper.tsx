import styles from '../../styles/Home.module.css'
import Navbar from "../navbar";

export default function imdbScraper() {
    return (
        <>
            <div className={styles.background}/>
            <main className={styles.main}>
                <Navbar/>
                <div className={styles.title}>
                    <div className={styles.titleText}>
                        <h1>
                            IMDb Scraper
                        </h1>
                        <p>
                            IMDb Scraper is a simple Java application that scrapes the top 250 section on the IMDb website.
                        </p>
                    </div>
                </div>
            </main>
        </>
    )
}