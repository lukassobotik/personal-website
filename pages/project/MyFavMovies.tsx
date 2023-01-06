import styles from '../../styles/Home.module.css'
import Navbar from "../navbar";

export default function MyFavMovies() {
    return (
        <>
        <main className={styles.main}>
            <Navbar/>
            <div className={styles.center}>
            <div className={styles.centerText}>
                <h1>
                    MyFavMovies
                </h1>
                <p>
                    MyFavMovies is a web application that allows you to search for movies and add them to your favorites.
                </p>
                <p>
                    The application is built using React and Firebase.
                </p>
            </div>
            </div>
        </main>
        </>
    )
}