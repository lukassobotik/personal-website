import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Navbar from "../../navbar";
import Image from "next/image";

export default function WidgetSchedule() {
    return (
        <>
            <Head>
                <title>Widget Schedule</title>
            </Head>
            <main className={styles.main}>
                <Navbar/>
                <div className={styles.project_overview_section}>
                    <div className={styles.overview}>
                        <h1>
                            WidgetSchedule
                        </h1>
                        <h3>
                            Java, Android, JSoup, SQLite
                        </h3>
                        <p>
                            The application aims to offer a convenient and customizable solution to users who require quick access to their schedules.
                            The application enables schedules to be turned into an Android widget from a URL or URLs of links, which can be effortlessly accessed from the device&apos;s home screen.
                        </p>
                        <p>
                            One of the notable features of the application is the ability to change the color of certain events in the schedule, allowing users to identify and differentiate between different types of events easily.
                            This feature makes managing schedules more convenient for users.
                        </p>
                        <p>
                            In summary, a simple and efficient solution is provided by our application for users who need to access their schedules on the go, without requiring them to open a browser or navigate to a specific website.
                        </p>
                        <div className={styles.project_link}>
                            <a href="https://play.google.com/store/apps/details?id=lukas.sobotik.widgetschedule" className={styles.skill}>Try it Out</a>
                            <a href="https://github.com/PuckyEU/WidgetSchedule" className={styles.skill}>Source Code</a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}