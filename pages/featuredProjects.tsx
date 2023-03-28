import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import 'aos/dist/aos.css'

export default function FeaturedProjects() {
    return (
        <>
            <Link href="/project/myQuotes" className={styles.project_post}>
                <Image src="/images/myQuotes/myQuotes.png" alt="" width={150} height={150} className={styles.featured_project_image}/>
                <div className={styles.post_text}>
                    <h2>MyQuotes</h2>
                    <h4>
                        Java, Android, Firebase
                    </h4>
                    <p>
                        myQuotes is an Android application where you can Share, Discover and Save New Quotes!
                    </p>
                    <p>
                        This was my first completed Android application that I published on the Google Play Store.
                    </p>
                </div>
            </Link>
            <Link href="/project/MyFavMovies" className={styles.project_post}>
                <Image src="/images/MyFavMovies/MyFavMovies.png" alt="" width={150} height={150} className={styles.featured_project_image}/>
                <div className={styles.post_text}>
                    <h2>MyFavMovies</h2>
                    <h4>
                        JavaScript, React, Firebase
                    </h4>
                    <p>
                        MyFavMovies is a website made for finding movies and adding them to your favorites.
                    </p>
                    <p>
                        It uses the The Movie Database API to fetch the movies.
                    </p>
                </div>
            </Link>
            <Link href="/project/vsem-schedule-change-notifier" className={styles.project_post}>
                <Image src="/images/schedule-change-notifier/VŠEM.png" alt="" width={150} height={150} className={styles.featured_project_image}/>
                <div className={styles.post_text}>
                    <h2>VŠEM Schedule Change Notifier</h2>
                    <h4>
                        Java, JavaMail, JSoup
                    </h4>
                    <p>
                        VŠEM Schedule Change Notifier is an app that notifies you about changes in the schedule of your classes.
                    </p>
                    <p className={styles.extra_description}>
                        The application is built using Java, JavaMail and Jsoup. It is deployed on a Raspberry Pi and runs on a Cron job.
                    </p>
                </div>
            </Link>
            <Link href="/project/TaskLooper" className={styles.project_post}>
                <Image src="/images/TaskLooper/TaskLooper.png" alt="" width={150} height={150} className={styles.featured_project_image}/>
                <div className={styles.post_text}>
                    <h2>TaskLooper</h2>
                    <h4>
                        Java, Android, SQLite
                    </h4>
                    <p>
                        TaskLooper is an android app where you manage daily tasks you want to complete.
                    </p>
                    <p className={styles.extra_description}>
                        Although it is similar to my other repository Repeaty, I have slightly different plans and goals for it.
                    </p>
                </div>
            </Link>
        </>
    )
}