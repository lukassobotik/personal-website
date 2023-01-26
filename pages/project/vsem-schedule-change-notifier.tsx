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
                            Java, JavaMail, JSoup, Raspberry Pi, Cron, Debian
                        </h3>
                        <p>
                            VŠEM Schedule Change Notifier is a Java application that notifies you about changes in the schedule of your classes. The application is built using Java, JavaMail and Jsoup. It is deployed on a Raspberry Pi and runs on a Cron job.
                        </p>
                        <p>
                            The application is running a Cron job that runs every 1 hour. The Cron job checks the schedule of the classes on the VŠEM website. If there is a change in the schedule, the application sends you an email with the new schedule.
                            On the Raspberry Pi, the application logs all the changes in the schedule, every run of the application and the emails that were sent. The application also logs the errors that occurred during the execution of the application.
                        </p>
                        <div className={styles.project_link}>
                            <a href="https://github.com/PuckyEU/vsem-schedule-change-notifier" className={styles.skill}>Source Code</a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}