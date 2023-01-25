import styles from '../../styles/Home.module.css'
import Navbar from "../navbar";
import Head from "next/head";

export default function pointAdder() {
    return (
        <>
            <Head>
                <title>Point Adder</title>
            </Head>
            <div className={styles.background}/>
            <main className={styles.main}>
                <Navbar/>
                <div className={styles.project_overview_section}>
                    <div className={styles.overview}>
                        <h1>
                            Point Adder
                        </h1>
                        <h3>
                            Java
                        </h3>
                        <p>
                            Point Adder is a really simple Java project that runs in the system tray where you have ease of access to add a point to a greater score.
                        </p>
                        <div className={styles.project_link}>
                            <a href="https://github.com/PuckyEU/point-adder" className={styles.skill}>Source Code</a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}