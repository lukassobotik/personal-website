import Head from "next/head";
import styles from '/styles/Home.module.css'
import Navbar from "../../navbar";
import Link from "next/link";
// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";

export default function Contact() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <Head>
                <title>Contact</title>
            </Head>
            <main className={styles.main}>
                <Navbar/>
                <h1 className={styles.contact_header} data-aos="fade-up">Contact</h1>
                <div className={styles.main_contact_item} data-aos="fade-up" data-aos-delay="50"><Link className={styles.url} href="/resume/junior-java-developer.pdf">Resume</Link></div>
                <div className={styles.main_contact_item} data-aos="fade-up" data-aos-delay="100"><Link className={styles.url} href="https://github.com/lukassobotik/personal-website">Source Code</Link></div>
                <div className={styles.main_contact_item} data-aos="fade-up" data-aos-delay="150"><Link className={styles.url} href="https://www.buymeacoffee.com/lukassobotik">Buy me a coffee</Link></div>
                <div className={styles.main_contact_item} data-aos="fade-up" data-aos-delay="200"><Link className={styles.url} href="https://github.com/lukassobotik">Github</Link></div>
                <div className={styles.main_contact_item} data-aos="fade-up" data-aos-delay="300"><Link className={styles.url} href="https://www.linkedin.com/in/lukassobotik/">LinkedIn</Link></div>
                <div className={styles.main_contact_item} data-aos="fade-up" data-aos-delay="350"><Link className={styles.url} href="https://www.freelancer.com/u/lukassobotik">Freelancer</Link></div>
                <div className={styles.main_contact_item} data-aos="fade-up" data-aos-delay="400"><Link className={styles.url} href="https://play.google.com/store/apps/dev?id=6212701078283176937">Google Play</Link></div>
                <div className={styles.main_contact_item} data-aos="fade-up" data-aos-delay="450"><Link className={styles.url} href="https://twitter.com/lukassobotik">Twitter</Link></div>
                <div className={styles.main_contact_item} data-aos="fade-up" data-aos-delay="500"><Link className={styles.url} href="https://youtube.com/@lukassobotik">YouTube</Link></div>
                <div className={styles.main_contact_item} data-aos="fade-up" data-aos-delay="550"><Link className={styles.url} href="https://gitlab.com/lukassobotik">Gitlab</Link></div>
                <div className={styles.main_contact_item} data-aos="fade-up" data-aos-delay="600"><Link className={styles.url} href="https://www.codewars.com/users/lukassobotik">CodeWars</Link></div>
                <div className={styles.main_contact_item} data-aos="fade-up" data-aos-delay="650"><Link className={styles.url} href="https://leetcode.com/lukassobotik/">LeetCode</Link></div>
            </main>
        </>
    )
}