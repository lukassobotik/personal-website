import styles from '../../styles/Home.module.css'
import Head from "next/head";
import Image from "next/image";
import Navbar from "../../navbar";

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
                        <Image src="/images/Repeaty/Repeaty.png" alt="" width={150} height={150} className={styles.project_image}/>
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
                            Even though it was never finished, it was my first Android application and I learned a lot about Android development. I also learned how to use git and Github. This was the project that got me into programming regularly.
                        </p>
                        <p>
                            It&apos;s made using Java and Android Studio. It uses SQLite to store the data. It isn&apos;t finished, but it has the basic functionality of adding and removing habits, and tracking them. I had planned to add a lot more features, but I lost interest in the project because I lost the need for the application. It also has a rather basic statistics system.
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