import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <div className={styles.description}>
            <div className={styles.navbar}>
                <Link href="/" className={styles.navbar_item}>
                    <h4>
                        Home
                    </h4>
                </Link>
                <Link href="/projects/" className={styles.navbar_item}>
                    <h4>
                        Projects
                    </h4>
                </Link>
                <Link href="/contact/" className={styles.navbar_item}>
                    <h4>
                        Contact Me
                    </h4>
                </Link>
            </div>
            <div>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
                    Hello!
                </a>
            </div>
        </div>
    )
}