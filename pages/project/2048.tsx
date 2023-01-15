import styles from '../../styles/Home.module.css'
import Navbar from "../navbar";
import Head from "next/head";

export default function twentyFortyEight() {
    return (
        <>
            <Head>
                <title>2048</title>
            </Head>
            <div className={styles.background}/>
            <main className={styles.main}>
                <Navbar/>
                <div className={styles.project_overview_section}>
                    <div className={styles.overview}>
                        <h1>
                            2048
                        </h1>
                        <h3>
                            Java, Java GUI
                        </h3>
                        <p>
                            My recreation of the popular game 2048. Built using Java.
                        </p>
                        <a href="https://github.com/PuckyEU/2048">Source Code</a>
                    </div>
                </div>
            </main>
        </>
    )
}