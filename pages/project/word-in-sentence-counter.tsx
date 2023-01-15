import styles from '../../styles/Home.module.css'
import Navbar from "../navbar";

export default function wordInSentenceCounter() {
    return (
        <>
            <div className={styles.background}/>
            <main className={styles.main}>
                <Navbar/>
                <div className={styles.title}>
                    <div className={styles.titleText}>
                        <h1>
                            Word in Sentence Counter
                        </h1>
                        <p>
                            Word in Sentence Counter is a C# application that counts the number of words in a sentence.
                        </p>
                    </div>
                </div>
            </main>
        </>
    )
}