import styles from "../styles/Home.module.css";
import Link from "next/link";
import GetRandomLine from "../GetRandomLine";
import React from "react";

export default function Navbar() {
    const [line, setLine] = React.useState("");

    React.useEffect(() => {
        setLine(GetRandomLine());
    }, []);

    return (
        <div className={styles.description}>
            <p>
                {line}
            </p>
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