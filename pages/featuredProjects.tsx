import styles from "../styles/Home.module.css";
import Link from "next/link";
import {Inter} from "@next/font/google";

const inter = Inter({ subsets: ['latin'] })

export default function FeaturedProjects() {
    return (
        <>
            <div className={styles.grid}>
                <Link href="/project/MyFavMovies" className={styles.project}>
                    <h3 className={inter.className}>
                        MyFavMovies <span>-&gt;</span>
                    </h3>
                    <h5 className={inter.className}>
                        JavaScript, React, Firebase
                    </h5>
                    <p className={inter.className}>
                        MyFavMovies is a web application that allows you to search for movies and add them to your favorites.
                    </p>
                </Link>
                <Link href="/project/myQuotes" className={styles.project}>
                    <h3 className={inter.className}>
                        myQuotes <span>-&gt;</span>
                    </h3>
                    <h5 className={inter.className}>
                        Java, Android, Firebase
                    </h5>
                    <p className={inter.className}>
                        myQuotes is an Android application where you can Share, Discover and Save New Quotes!
                    </p>
                </Link>
                <Link href="/project/vsem-schedule-change-notifier" className={styles.project}>
                    <h3 className={inter.className}>
                        VŠEM Change Notifier <span>-&gt;</span>
                    </h3>
                    <h5 className={inter.className}>
                        Java, JavaMail, JSoup
                    </h5>
                    <p className={inter.className}>
                        VŠEM Schedule Change Notifier is a Java application that notifies you about changes in the schedule of your classes.
                    </p>
                </Link>
                <Link href="/project/Repeaty" className={styles.project}>
                    <h3 className={inter.className}>
                        Repeaty <span>-&gt;</span>
                    </h3>
                    <h5 className={inter.className}>
                        Java, Android, SQLite
                    </h5>
                    <p className={inter.className}>
                        Repeaty is an android application to Track and Manage your Habits.
                    </p>
                </Link>
            </div>
        </>
    )
}