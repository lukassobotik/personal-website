import styles from '../../styles/Home.module.css'
import Navbar from "../../navbar";
import Head from "next/head";
import Image from "next/image";

export default function VsemScheduleChangeNotifier() {
    return (
        <>
            <Head>
                <title>VŠEM Schedule Change Notifier</title>
            </Head>
            <main className={styles.main}>
                <Navbar/>
                <div className={styles.project_overview_section}>
                    <div className={styles.overview}>
                        <Image src="/images/schedule-change-notifier/VŠEM.png" alt="" width={150} height={150} className={styles.project_image}/>
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
                            I basically made this application for myself, because I was tired of checking the schedule of my classes on the VŠEM website every day. I wanted to be notified about changes in the schedule of my classes. But decided to make it public, so that other students can use it as well.
                        </p>
                        <p>
                            The application is running a Cron job that runs every 1 hour. The Cron job checks the schedule of the classes on the VŠEM website. If there is a change in the schedule, the application sends you an email with the new schedule.
                            On the Raspberry Pi, the application logs all the changes in the schedule, every run of the application and the emails that were sent. The application also logs the errors that occurred during the execution of the application.
                        </p>
                        <p>
                            I made my own logging system, because it&apos;d be a waste of resources to use a logging library for such a small application.
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