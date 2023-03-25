import Navbar from "./navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import {Inter} from "@next/font/google";
import FeaturedProjects from "./featuredProjects";
import Head from "next/head";

const inter = Inter({ subsets: ['latin'] })

export default function Projects() {
    return (
        <>
            <Head>
                <title>Projects</title>
            </Head>
            <main className={styles.main}>

            </main>
        </>
    )
}