import styles from '../../styles/Home.module.css'
import Navbar from "../navbar";

export default function portfolio() {
    return (
        <>
            <div className={styles.background}/>
            <main className={styles.main}>
                <Navbar/>
                <div className={styles.title}>
                    <div className={styles.titleText}>
                        <h1>
                            Portfolio Website
                        </h1>
                        <p>
                            This website is built using TypeScript, Next.js and React.
                        </p>
                    </div>
                </div>
            </main>
        </>
    )
}