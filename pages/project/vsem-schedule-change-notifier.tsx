import styles from '../../styles/Home.module.css'
import Navbar from "../navbar";

export default function VsemScheduleChangeNotifier() {
    return (
        <>
            <main className={styles.main}>
                <Navbar/>
                <div className={styles.center}>
                    <div className={styles.centerText}>
                        <h1>
                            VŠEM Schedule Change Notifier
                        </h1>
                        <p>
                            VŠEM Schedule Change Notifier is a Java application that notifies you about changes in the schedule of your classes.
                        </p>
                        <p>
                            The application is built using Java, JavaMail and Jsoup.
                        </p>
                    </div>
                </div>
            </main>
        </>
    )
}