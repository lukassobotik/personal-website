import styles from '../../styles/Home.module.css'
import Navbar from "../navbar";

export default function biggerOrSmaller() {
    return (
        <>
            <div className={styles.background}/>
            <main className={styles.main}>
                <Navbar/>
                <div className={styles.title}>
                    <div className={styles.titleText}>
                        <h1>
                            Bigger or Smaller
                        </h1>
                        <p>
                            Bigger or Smaller is a simple Java GUI application that compares two numbers and tells you which one is bigger.
                        </p>
                        <p>
                            The application is built using Java and Java GUIs.
                        </p>
                    </div>
                </div>
            </main>
        </>
    )
}