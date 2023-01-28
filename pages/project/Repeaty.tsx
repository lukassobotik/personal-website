import styles from '../../styles/Home.module.css'
import Navbar from "../navbar";
import Head from "next/head";

export default function Repeaty() {
    return (
        <>
            <Head>
                <title>Repeaty</title>
            </Head>
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
                            This was my first Android application and I learned a lot about Android development. I also learned how to use git and Github.
                        </p>
                        <div className={styles.project_link}>
                            <a href="https://github.com/PuckyEU/habit-manager" className={styles.skill}>Source Code</a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}