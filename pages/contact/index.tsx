import Head from "next/head";
import styles from '/styles/Home.module.css'
import Navbar from "../../navbar";
import Link from "next/link";

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact</title>
            </Head>
            <main className={styles.main}>
                <Navbar/>
                <h1 className={styles.contact_header}>Contact</h1>
                <div className={styles.main_contact_item}><Link className={styles.url} href="/resume/junior-java-developer.pdf">Resume</Link></div>
                <div className={styles.main_contact_item}><Link className={styles.url} href="https://github.com/PuckyEU/puckyeu.github.io">Source Code</Link></div>
                <div className={styles.main_contact_item}><Link className={styles.url} href="https://www.buymeacoffee.com/puckyeu">BuyMeACoffee</Link></div>
                <div className={styles.main_contact_item}><Link className={styles.url} href="https://github.com/PuckyEU">Github</Link></div>
                <div className={styles.main_contact_item}><Link className={styles.url} href="https://www.linkedin.com/in/lukassobotik/">LinkedIn</Link></div>
                <div className={styles.main_contact_item}><Link className={styles.url} href="https://www.freelancer.com/u/lukassobotik">Freelancer</Link></div>
                <div className={styles.main_contact_item}><Link className={styles.url} href="https://play.google.com/store/apps/dev?id=6212701078283176937">Google Play</Link></div>
                <div className={styles.main_contact_item}><Link className={styles.url} href="https://twitter.com/PuckyEU">Twitter</Link></div>
                <div className={styles.main_contact_item}><Link className={styles.url} href="https://youtube.com/@PuckyEU">YouTube</Link></div>
                <div className={styles.main_contact_item}><Link className={styles.url} href="https://www.codewars.com/users/PuckyEU">CodeWars</Link></div>
            </main>
        </>
    )
}