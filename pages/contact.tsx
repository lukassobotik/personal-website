import Head from "next/head";
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

            </main>
        </>
    )
}