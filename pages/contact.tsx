import Head from "next/head";
import Navbar from "./navbar";
import styles from "../styles/Home.module.css";
import {Inter} from "@next/font/google";

const inter = Inter({ subsets: ['latin'] })

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact</title>
            </Head>
            <main className={styles.main}>
                <Navbar/>
                <h2 className={styles.featured}>
                    Contact Me
                </h2>
                <div className={styles.overview}>
                    <p>I would prefer if you would contact me through LinkedIn, but you can contact me through email too.</p>
                </div>
                <div className={styles.grid}>
                    <a href="https://www.linkedin.com/in/lukassobotik/" className={styles.card}>
                        <h2 className={inter.className}>
                            LinkedIn <span>-&gt;</span>
                        </h2>
                        <p className={inter.className}>
                            Here you can find my LinkedIn profile. You can also contact me there.
                        </p>
                    </a>
                    <a href="mailto:sobotik.lukas@proton.me" className={styles.card}>
                        <h2 className={inter.className}>
                            Email <span>-&gt;</span>
                        </h2>
                        <p className={inter.className}>
                            This is my email address. You can contact me here. I will try to respond as soon as possible.
                        </p>
                    </a>

                    <a href="https://www.buymeacoffee.com/puckyeu" className={styles.card}>
                        <h2 className={inter.className}>
                            Buy Me A Coffee <span>-&gt;</span>
                        </h2>
                        <p className={inter.className}>
                            You can buy me a coffee if you want to support me! I would really appreciate it!
                        </p>
                    </a>

                    <a href="/resume/junior-java-developer.pdf" className={styles.card}>
                        <h2 className={inter.className}>
                            CV <span>-&gt;</span>
                        </h2>
                        <p className={inter.className}>
                            Here you can find my CV. You can download it here.
                        </p>
                    </a>
                </div>
            </main>
        </>
    )
}