import styles from '../../styles/Home.module.css'
import Navbar from "../navbar";
import Head from "next/head";
import Image from "next/image";

export default function MyQuotes() {
    return (
        <>
            <Head>
                <title>MyQuotes</title>
            </Head>
            <div className={styles.background}/>
            <main className={styles.main}>
                <Navbar/>
                <div className={styles.project_overview_section}>
                    <div className={styles.overview}>
                        <Image src="/myQuotes.png" alt="" width={150} height={150} className={styles.project_image}/>
                        <h1>
                            myQuotes
                        </h1>
                        <h3>
                            Java, Android, Firebase
                        </h3>
                        <p>
                            myQuotes is an Android application where you can Share, Discover and Save New Quotes!
                        </p>
                        <p>
                            The application is built using Java and Firebase.
                        </p>
                        <div className={styles.project_link}><a href="https://github.com/PuckyEU/Quotes">Source Code</a></div>
                        <p></p>
                        <a href="https://play.google.com/store/apps/details?id=com.sforge.quotes">Try it Out</a>
                    </div>
                </div>
            </main>
        </>
    )
}