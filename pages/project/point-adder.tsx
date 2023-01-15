import styles from '../../styles/Home.module.css'
import Navbar from "../navbar";

export default function pointAdder() {
    return (
        <>
            <div className={styles.background}/>
            <main className={styles.main}>
                <Navbar/>
                <div className={styles.title}>
                    <div className={styles.titleText}>
                        <h1>
                            Point Adder
                        </h1>
                        <p>
                            Point Adder is a simple Java application that adds points to a score.
                        </p>
                    </div>
                </div>
            </main>
        </>
    )
}