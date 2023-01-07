import Navbar from "./navbar";
import styles from "../styles/Home.module.css";

export default function Projects() {
    return (
        <>
            <div className={styles.background}/>
            <main className={styles.main}>
                <Navbar/>
                <div>Projects Page</div>
            </main>
        </>
    )
}