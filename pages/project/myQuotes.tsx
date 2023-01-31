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
            <main className={styles.main}>
                <Navbar/>
                <div className={styles.project_overview_section}>
                    <div className={styles.overview}>
                        <Image src="/images/myQuotes/myQuotes.png" alt="" width={150} height={150} className={styles.project_image}/>
                        <h1>
                            myQuotes
                        </h1>
                        <h3>
                            Java, Android, Firebase
                        </h3>
                        <p>
                            myQuotes is an Android application where you can Share, Discover and Save New Quotes!
                            The application is built using Java and Firebase. The application is available on the Google Play Store.
                        </p>
                        <p>
                            This was my first completed Android application that I published on the Google Play Store.
                        </p>
                        <p>
                            You can create an account and share your own quotes or you can discover new quotes from other users. You can also save quotes to your favorites.
                            You can also search for quotes by author or by quote. You can also change your background color behind the quote.
                            Users can delete their own account and all of their quotes and data.
                        </p>
                        <div className={styles.project_link}>
                            <a href="https://play.google.com/store/apps/details?id=com.sforge.quotes" className={styles.skill}>Try it Out</a>
                            <a href="https://github.com/PuckyEU/Quotes" className={styles.skill}>Source Code</a>
                        </div>
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