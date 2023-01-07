import Navbar from "./navbar";
import styles from "../styles/Home.module.css";

export default function Contact() {
    return (
        <>
            <div className={styles.background}/>
            <main className={styles.main}>
                <Navbar/>
                <div>Contact Page</div>
            </main>
        </>
    )
}