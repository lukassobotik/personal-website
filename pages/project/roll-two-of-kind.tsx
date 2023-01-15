import styles from '../../styles/Home.module.css'
import Navbar from "../navbar";

export default function rollTwoOfKind() {
    return (
        <>
            <div className={styles.background}/>
            <main className={styles.main}>
                <Navbar/>
                <div className={styles.title}>
                    <div className={styles.titleText}>
                        <h1>
                            Roll Two of a Kind
                        </h1>
                        <p>
                            Roll Two of a Kind is a simple C# where you can test your luck by rolling two dice.
                        </p>
                    </div>
                </div>
            </main>
        </>
    )
}