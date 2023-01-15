import styles from '../../styles/Home.module.css'
import Navbar from "../navbar";
import Head from "next/head";

export default function Repeaty() {
    return (
        <>
            <Head>
                <title>Repeaty</title>
            </Head>
            <div className={styles.background}/>
            <main className={styles.main}>
                <Navbar/>
                <div className={styles.project_overview_section}>
                    <div className={styles.overview}>
                        <h1>
                            Repeaty
                        </h1>
                        <h3>
                            Java, Android, SQLite
                        </h3>
                        <p>
                            Repeaty is an android application to Track and Manage your Habits.
                        </p>
                        <p>
                            The application is built using Java and Firebase.
                        </p>
                        <a href="https://github.com/PuckyEU/habit-manager">Source Code</a>
                    </div>
                </div>
            </main>
        </>
    )
}