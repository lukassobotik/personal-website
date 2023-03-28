import styles from '../../styles/Home.module.css'
import Navbar from "../../navbar";
import Head from "next/head";

export default function portfolio() {
    return (
        <>
            <Head>
                <title>Portfolio Website</title>
            </Head>
            <main className={styles.main}>
                <Navbar/>
                <div className={styles.project_overview_section}>
                    <div className={styles.overview}>
                        <h1>
                            Portfolio Website
                        </h1>
                        <h3>
                            TypeScript, Next.js, React
                        </h3>
                        <p>
                            This website is built using TypeScript, Next.js and React.
                        </p>
                    </div>
                    <div className={styles.project_link}>
                        <a href="https://github.com/PuckyEU/puckyeu.github.io" className={styles.skill}>Source Code</a>
                    </div>
                </div>
            </main>
        </>
    )
}