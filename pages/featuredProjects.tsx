import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import {FadeLeft, FadeRight} from "./animations";

export default function FeaturedProjects() {
    return (
        <>
            <div className={styles.featured_projects}>
                <FadeLeft>
                    <Link href="/project/MyFavMovies" data-aos="fade-right" className={styles.featured_project}>
                        <div className={styles.featured_project_description}>
                            <h2>MyFavMovies</h2>
                            <h4>
                                JavaScript, React, Firebase
                            </h4>
                            <p>
                                MyFavMovies is a website made for finding movies and adding them to your favorites.
                            </p>
                            <p className={styles.extra_description}>
                                It uses the The Movie Database API to fetch the movies.
                            </p>
                        </div>
                        <Image src="/images/MyFavMovies/MyFavMovies.png" alt="" width={150} height={150} className={styles.featured_project_image}/>
                    </Link>
                </FadeLeft>
                <FadeRight>
                    <Link href="/project/myQuotes" data-aos="fade-right" className={styles.featured_project}>
                        <Image src="/images/myQuotes/myQuotes.png" alt="" width={150} height={150} className={styles.featured_project_image}/>
                        <div className={styles.featured_project_description}>
                            <h2>MyQuotes</h2>
                            <h4>
                                Java, Android, Firebase
                            </h4>
                            <p>
                                myQuotes is an Android application where you can Share, Discover and Save New Quotes!
                            </p>
                            <p className={styles.extra_description}>
                                This was my first completed Android application that I published on the Google Play Store.
                            </p>
                        </div>
                    </Link>
                </FadeRight>
                <FadeLeft>
                    <Link href="/project/vsem-schedule-change-notifier" data-aos="fade-right" className={styles.featured_project}>
                        <div className={styles.featured_project_description}>
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
                        <Image src="/images/schedule-change-notifier/VŠEM.png" alt="" width={150} height={150} className={styles.featured_project_image}/>
                    </Link>
                </FadeLeft>
                <FadeRight>
                    <Link href="/project/Repeaty" data-aos="fade-right" className={styles.featured_project}>
                        <Image src="/images/Repeaty/Repeaty.png" alt="" width={150} height={150} className={styles.featured_project_image}/>
                        <div className={styles.featured_project_description}>
                            <h2>Repeaty</h2>
                            <h4>
                                Java, Android, SQLite
                            </h4>
                            <p>
                                Repeaty is an android application to Track and Manage your Habits.
                            </p>
                            <p className={styles.extra_description}>
                                Even though it was never finished, it was my first Android application and I learned a lot about Android development.
                            </p>
                        </div>
                    </Link>
                </FadeRight>
            </div>
        </>
    )
}