import styles from '../../styles/Home.module.css'
import Navbar from "../navbar";

export default function MyFavMovies() {
    return (
        <>
            <div className={styles.background}/>
            <main className={styles.main}>
            <Navbar/>
            <div className={styles.title}>
            <div className={styles.titleText}>
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