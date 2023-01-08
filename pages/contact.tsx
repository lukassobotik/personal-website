import Navbar from "./navbar";
import styles from "../styles/Home.module.css";
import {Inter} from "@next/font/google";

const inter = Inter({ subsets: ['latin'] })

export default function Contact() {
    return (
        <>
            <div className={styles.background}/>
            <main className={styles.main}>
                <Navbar/>
                <h2 className={styles.featured}>
                    Contact Me
                </h2>
                <div className={styles.overview}>
                    <p>My preferred way of contact is LinkedIn, but you can contact me by email too.</p>
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
                            Here you can find all of my source code for this website. If you have any questions or suggestions, feel free to contact me!
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

                    <a href="https://github.com/PuckyEU" className={styles.card}>
                        <h2 className={inter.className}>
                            Github <span>-&gt;</span>
                        </h2>
                        <p className={inter.className}>
                            Take a look at my Github! You can find all of my projects there. This website is also open source, you can find it there too!
                        </p>
                    </a>
                </div>
            </main>
        </>
    )
}