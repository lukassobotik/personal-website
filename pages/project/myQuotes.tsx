import styles from '../../styles/Home.module.css'
import Navbar from "../navbar";

export default function MyQuotes() {
    return (
        <>
            <main className={styles.main}>
                <Navbar/>
                <div className={styles.title}>
                    <div className={styles.titleText}>
                        <h1>
                            myQuotes
                        </h1>
                        <p>
                            myQuotes is an Android application where you can Share, Discover and Save New Quotes!
                        </p>
                        <p>
                            The application is built using Java and Firebase.
                        </p>
                    </div>
                </div>
            </main>
        </>
    )
}