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
                <div className={styles.main_contact_item}><Link className={styles.url} href="https://github.com/lukassobotik/personal-website">Source Code</Link></div>
                <div className={styles.main_contact_item}><Link className={styles.url} href="https://www.buymeacoffee.com/lukassobotik">BuyMeACoffee</Link></div>
                <div className={styles.main_contact_item}><Link className={styles.url} href="https://github.com/lukassobotik">Github</Link></div>
                <div className={styles.main_contact_item}><Link className={styles.url} href="https://www.linkedin.com/in/lukassobotik/">LinkedIn</Link></div>
                <div className={styles.main_contact_item}><Link className={styles.url} href="https://www.freelancer.com/u/lukassobotik">Freelancer</Link></div>
                <div className={styles.main_contact_item}><Link className={styles.url} href="https://play.google.com/store/apps/dev?id=6212701078283176937">Google Play</Link></div>
                <div className={styles.main_contact_item}><Link className={styles.url} href="https://twitter.com/lukassobotik">Twitter</Link></div>
                <div className={styles.main_contact_item}><Link className={styles.url} href="https://youtube.com/@lukassobotik">YouTube</Link></div>
                <div className={styles.main_contact_item}><Link className={styles.url} href="https://gitlab.com/lukassobotik">Gitlab</Link></div>
                <div className={styles.main_contact_item}><Link className={styles.url} href="https://www.codewars.com/users/lukassobotik">CodeWars</Link></div>
                <div className={styles.main_contact_item}><Link className={styles.url} href="https://leetcode.com/lukassobotik/">LeetCode</Link></div>
            </main>
        </>
    )
}