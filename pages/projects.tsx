import Navbar from "./navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import {Inter} from "@next/font/google";
import FeaturedProjects from "./featuredProjects";
import Head from "next/head";

const inter = Inter({ subsets: ['latin'] })

export default function Projects() {
    return (
        <>
            <Head>
                <title>Projects</title>
            </Head>
            <main className={styles.main}>
                <Navbar/>
                <h2 className={styles.featured}>
                    Featured Projects
                </h2>
                <FeaturedProjects/>
                <h2 className={styles.featured}>
                    Other Projects
                </h2>
                <div className={styles.grid}>
                    <Link href="/project/portfolio" className={styles.project}>
                        <h3 className={inter.className}>
                            Portfolio Website <span>-&gt;</span>
                        </h3>
                        <h5 className={inter.className}>
                            TypeScript, Next.js, React
                        </h5>
                        <p className={inter.className}>
                            Source code of this website.
                        </p>
                    </Link>
                    <Link href="/project/2048" className={styles.project}>
                        <h3 className={inter.className}>
                            2048 <span>-&gt;</span>
                        </h3>
                        <h5 className={inter.className}>
                            Java, Java GUI
                        </h5>
                        <p className={inter.className}>
                            My recreation of the popular game 2048.
                        </p>
                    </Link>
                    <Link href="/project/word-in-sentence-counter" className={styles.project}>
                        <h3 className={inter.className}>
                            Word Counter <span>-&gt;</span>
                        </h3>
                        <h5 className={inter.className}>
                            C#
                        </h5>
                        <p className={inter.className}>
                            Simple C# application that counts the number of words in a sentence.
                        </p>
                    </Link>
                    <Link href="/project/imdb-scraper" className={styles.project}>
                        <h3 className={inter.className}>
                            IMDb Scraper <span>-&gt;</span>
                        </h3>
                        <h5 className={inter.className}>
                            Java, JSoup
                        </h5>
                        <p className={inter.className}>
                            Simple Java application that scrapes the top 250 section on the IMDb website.
                        </p>
                    </Link>
                    <Link href="/project/bigger-or-smaller" className={styles.project}>
                        <h3 className={inter.className}>
                            Bigger or Smaller <span>-&gt;</span>
                        </h3>
                        <h5 className={inter.className}>
                            Java, Java GUI
                        </h5>
                        <p className={inter.className}>
                            Simple Java Gui application that compares two numbers.
                        </p>
                    </Link>
                    <Link href="/project/roll-two-of-kind" className={styles.project}>
                        <h3 className={inter.className}>
                            Roll Two of a Kind <span>-&gt;</span>
                        </h3>
                        <h5 className={inter.className}>
                            C#
                        </h5>
                        <p className={inter.className}>
                            Test Your Luck By Rolling Two Dice!
                        </p>
                    </Link>
                    <Link href="/project/point-adder" className={styles.project}>
                        <h3 className={inter.className}>
                            Point Adder <span>-&gt;</span>
                        </h3>
                        <h5 className={inter.className}>
                            Java
                        </h5>
                        <p className={inter.className}>
                            Simple Java project made for storing any amount of points. It runs in the system tray.
                        </p>
                    </Link>
                </div>
            </main>
        </>
    )
}