import FetchProjects from "../FetchProjects";
import styles from "../../styles/Home.module.css";
import Head from "next/head";
import Navbar from "../../navbar";

export default function AllProjects() {
    return (
        <>
            <Head>
                <title>Projects</title>
            </Head>
            <main className={styles.main}>
                <Navbar/>
                <FetchProjects onlyFeatured={true}/>
                <FetchProjects onlyFeatured={false}/>
            </main>
        </>
    )
}