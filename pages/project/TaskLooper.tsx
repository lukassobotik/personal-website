import styles from '../../styles/Home.module.css'
import Navbar from "../navbar";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function TaskLooper() {
    return (
        <>
            <Head>
                <title>TaskLooper</title>
            </Head>
            <main className={styles.main}>
                <Navbar/>
                <div className={styles.project_overview_section}>
                    <Image src="/images/TaskLooper/TaskLooper.png" alt="" width={150} height={150} className={styles.project_image}/>
                    <div className={styles.overview}>
                        <h1>
                            TaskLooper
                        </h1>
                        <h3>
                            Java, Android, SQLite
                        </h3>
                        <p>
                            Seize the Day, Repeat the Success.
                        </p>
                        <p>
                            This lightweight task-repeating Android application is designed to help users keep track of their daily tasks and activities without any unnecessary clutter. The application automatically unchecks completed tasks the next day, making it easy for users to manage their to-do list on a daily basis.
                        </p>
                        <p>
                            One of the key benefits of this application is that all the data is stored locally, ensuring user privacy and security. The app is also very simple and easy to use, with a minimalistic interface that doesn&apos;t require any complex setup or configuration.
                        </p>
                        <p>
                            Although it is similar to my other repository <Link href="/project/Repeaty">Repeaty</Link>, I have slightly different plans and goals for it.
                            <Link href="/project/Repeaty"> Repeaty</Link> was more on the habit building side, this is more on the to-do list side.
                        </p>
                        <div className={styles.project_link}>
                            <a href="https://play.google.com/store/apps/details?id=lukas.sobotik.tasklooper" className={styles.skill}>Try it Out</a>
                            <a href="https://github.com/PuckyEU/TaskLooper" className={styles.skill}>Source Code</a>
                        </div>
                        <div className={styles.vertical_project_images}>
                            <Image src="/images/TaskLooper/sc-1.jpg" alt="" width={270} height={530}/>
                            <Image src="/images/TaskLooper/sc-2.jpg" alt="" width={270} height={530}/>
                            <Image src="/images/TaskLooper/sc-3.jpg" alt="" width={270} height={530}/>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}