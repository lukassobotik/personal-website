import styles from '../../styles/Home.module.css'
import Navbar from "../navbar";
import Head from "next/head";

export default function MyQuotes() {
    return (
        <>
            <Head>
                <title>MyQuotes</title>
            </Head>
            <div className={styles.background}/>
            <main className={styles.main}>
                <Navbar/>
                <div className={styles.project_overview_section}>
                    <div className={styles.overview}>
                        <h1>
                            myQuotes
                        </h1>
                        <h3>
                            Java, Android, Firebase
                        </h3>
                        <p>
                            myQuotes is an Android application where you can Share, Discover and Save New Quotes!
                        </p>
                        <p>
                            The application is built using Java and Firebase.
                        </p>
                        <a href="https://github.com/PuckyEU/Quotes">Source Code</a>
                    </div>
                </div>
            </main>
        </>
    )
}