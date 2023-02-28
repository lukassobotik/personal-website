import styles from '../../styles/Home.module.css'
import Navbar from "../navbar";
import Head from "next/head";
import Image from "next/image";

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
                            You can create an account and login to save your favorite movies or save them to collections that you created.
                            You can also set your language and region preferences. The application will use them to fetch the movies in your language and region.
                            You can set a profile picture and a username.
                            The application is fully responsive and works on mobile devices.
                            This application was my first project using React and developing a web application in general.
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