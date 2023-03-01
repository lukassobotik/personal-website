import styles from '../../styles/Home.module.css'
import Navbar from "../navbar";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function DailyTasks() {
    return (
        <>
            <Head>
                <title>DailyTasks</title>
            </Head>
            <main className={styles.main}>
                <Navbar/>
                <div className={styles.project_overview_section}>
                    <Image src="/images/DailyTasks/DailyTasks.png" alt="" width={150} height={150} className={styles.project_image}/>
                    <div className={styles.overview}>
                        <h1>
                            DailyTasks
                        </h1>
                        <h3>
                            Java, Android, SQLite
                        </h3>
                        <p>
                            DailyTasks is an android app where you manage daily tasks you want to complete.
                        </p>
                        <p>
                            Although it is similar to my other repository <Link href="/project/Repeaty">Repeaty</Link>, I have slightly different plans and goals for it.
                            <Link href="/project/Repeaty"> Repeaty</Link> was more on the habit building side, this is more on the to-do list side.
                        </p>
                        <div className={styles.project_link}>
                            <a href="https://github.com/PuckyEU/DailyTasks" className={styles.skill}>Source Code</a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}