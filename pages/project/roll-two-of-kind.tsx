import styles from '../../styles/Home.module.css'
import Navbar from "../navbar";
import Head from "next/head";

export default function rollTwoOfKind() {
    return (
        <>
            <Head>
                <title>Roll Two of a Kind</title>
            </Head>
            <div className={styles.background}/>
            <main className={styles.main}>
                <Navbar/>
                <div className={styles.project_overview_section}>
                    <div className={styles.overview}>
                        <h1>
                            Roll Two of a Kind
                        </h1>
                        <h3>
                            C#
                        </h3>
                        <p>
                            Roll Two of a Kind is a simple C# where you can test your luck by rolling two dice.
                        </p>
                        <div className={styles.project_link}><a href="https://github.com/PuckyEU/roll-two-of-kind">Source Code</a></div>
                    </div>
                </div>
            </main>
        </>
    )
}