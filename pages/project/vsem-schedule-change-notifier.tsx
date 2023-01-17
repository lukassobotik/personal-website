import styles from '../../styles/Home.module.css'
import Navbar from "../navbar";
import Head from "next/head";

export default function VsemScheduleChangeNotifier() {
    return (
        <>
            <Head>
                <title>VŠEM Schedule Change Notifier</title>
            </Head>
            <div className={styles.background}/>
            <main className={styles.main}>
                <Navbar/>
                <div className={styles.project_overview_section}>
                    <div className={styles.overview}>
                        <h1>
                            VŠEM Schedule Change Notifier
                        </h1>
                        <h3>
                            Java, JavaMail, JSoup
                        </h3>
                        <p>
                            VŠEM Schedule Change Notifier is a Java application that notifies you about changes in the schedule of your classes.
                        </p>
                        <p>
                            The application is built using Java, JavaMail and Jsoup.
                        </p>
                        <div className={styles.project_link}><a href="https://github.com/PuckyEU/vsem-schedule-change-notifier">Source Code</a></div>
                    </div>
                </div>
            </main>
        </>
    )
}