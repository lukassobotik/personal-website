import styles from '../../styles/Home.module.css'
import Navbar from "../navbar";

export default function twentyFortyEight() {
    return (
        <>
            <div className={styles.background}/>
            <main className={styles.main}>
                <Navbar/>
                <div className={styles.title}>
                    <div className={styles.titleText}>
                        <h1>
                            2048
                        </h1>
                        <p>
                            My recreation of the popular game 2048. Built using Java.
                        </p>
                    </div>
                </div>
            </main>
        </>
    )
}