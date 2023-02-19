import styles from "../styles/Home.module.css";
import Link from "next/link";
import React from "react";

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
                        Contact
                    </h4>
                </Link>
            </div>
        </div>
    )
}