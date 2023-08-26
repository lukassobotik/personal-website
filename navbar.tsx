import styles from "./styles/Home.module.css";
import Link from "next/link";
import React from "react";

export default function Navbar() {
    return (
        <div className={styles.header}>
            <Link href="/" className={styles.header_name}>Lukáš Sobotík</Link>
            <div className={styles.header_tabs}>
                <Link href="/" className={styles.header_tab}>
                    <h3>
                        Home
                    </h3>
                </Link>
                <Link href="/projects" className={styles.header_tab}>
                    <h3>
                        Projects
                    </h3>
                </Link>
                <Link href="/contact" className={styles.header_tab}>
                    <h3>
                        Contact
                    </h3>
                </Link>
            </div>
        </div>
    )
}