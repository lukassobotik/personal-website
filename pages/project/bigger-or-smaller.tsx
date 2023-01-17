import styles from '../../styles/Home.module.css'
import Navbar from "../navbar";
import Head from "next/head";

export default function biggerOrSmaller() {
    return (
        <>
            <Head>
                <title>Bigger or Smaller</title>
            </Head>
            <div className={styles.background}/>
            <main className={styles.main}>
                <Navbar/>
                <div className={styles.project_overview_section}>
                    <div className={styles.overview}>
                        <h1>
                            Bigger or Smaller
                        </h1>
                        <h3>
                            Java, Java GUI
                        </h3>
                        <p>
                            Bigger or Smaller is a simple Java GUI application that compares two numbers and tells you which one is bigger.
                        </p>
                        <p>
                            The application is built using Java and Java GUIs.
                        </p>
                        <div className={styles.project_link}><a href="https://github.com/PuckyEU/bigger-or-smaller">Source Code</a></div>
                    </div>
                </div>
            </main>
        </>
    )
}