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
                        <Image src="/myQuotes/myQuotes.png" alt="" width={150} height={150} className={styles.project_image}/>
                        <h1>
                            myQuotes
                        </h1>
                        <h3>
                            Java, Android, Firebase
                        </h3>
                        <p>
                            myQuotes is an Android application where you can Share, Discover and Save New Quotes!
                        </p>
                        <div className={styles.project_link}><a href="https://github.com/PuckyEU/Quotes">Source Code</a></div>
                        <p/>
                        <a href="https://play.google.com/store/apps/details?id=com.sforge.quotes">Try it Out</a>
                        <p/>
                        <div className={styles.vertical_project_images}>
                            <Image src="/images/myQuotes/vid-1.gif" alt="" width={270} height={530}/>
                            <Image src="/images/myQuotes/sc-1.jpg" alt="" width={270} height={530}/>
                            <Image src="/images/myQuotes/sc-2.jpg" alt="" width={270} height={530}/>
                            <Image src="/images/myQuotes/sc-3.jpg" alt="" width={270} height={530}/>
                            <Image src="/images/myQuotes/sc-4.jpg" alt="" width={270} height={530}/>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}