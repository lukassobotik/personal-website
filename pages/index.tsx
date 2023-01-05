import {Inter} from '@next/font/google'
import styles from '../styles/Home.module.css'
import Navbar from "./navbar";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Navbar/>
        <div className={styles.center}>
          <div className={styles.centerText}>
            <h1>
              Full Stack Developer
            </h1>
            <p>
              Student at Akademie VŠEM studying economics. Full stack developer of web and mobile applications.
            </p>
            <p>
              I am currently learning Java, and I have had a bit of experience with JavaScript and C# as well.
            </p>
          </div>
        </div>

        <h2 className={styles.featured}>
          Featured Projects
        </h2>
        <div className={styles.grid}>
          <a href={""} className={styles.project}>
            <h3 className={inter.className}>
              MyFavMovies <span>-&gt;</span>
            </h3>
            <h5 className={inter.className}>
              JavaScript, React, Firebase
            </h5>
            <p className={inter.className}>
              MyFavMovies is a web application that allows you to search for movies and add them to your favorites.
            </p>
          </a>
          <a href={""} className={styles.project}>
            <h3 className={inter.className}>
              myQuotes <span>-&gt;</span>
            </h3>
            <h5 className={inter.className}>
              Java, Android, Firebase
            </h5>
            <p className={inter.className}>
              myQuotes is an Android application where you can Share, Discover and Save New Quotes!
            </p>
          </a>
          <a href={""} className={styles.project}>
            <h3 className={inter.className}>
              VŠEM Change Notifier <span>-&gt;</span>
            </h3>
            <h5 className={inter.className}>
              Java, JavaMail, JSoup
            </h5>
            <p className={inter.className}>
                VŠEM Schedule Change Notifier is a Java application that notifies you about changes in the schedule of your classes.
            </p>
          </a>
          <a href={""} className={styles.project}>
            <h3 className={inter.className}>
              Repeaty <span>-&gt;</span>
            </h3>
            <h5 className={inter.className}>
              Java, Android, SQLite
            </h5>
            <p className={inter.className}>
              Repeaty is an android application to Track and Manage your Habits.
            </p>
          </a>
        </div>
        <h2 className={styles.featured}>
          External Links
        </h2>
        <div className={styles.grid}>
          <a href="https://github.com/PuckyEU/puckyeu.github.io" className={styles.card}>
            <h2 className={inter.className}>
              Source Code <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
                Here you can find all of my source code for this website. If you have any questions or suggestions, feel free to contact me!
            </p>
          </a>

          <a href="https://www.buymeacoffee.com/puckyeu" className={styles.card}>
            <h2 className={inter.className}>
              Buy Me A Coffee <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              You can buy me a coffee if you want to support me! I would really appreciate it!
            </p>
          </a>

          <a href="https://github.com/PuckyEU" className={styles.card}>
            <h2 className={inter.className}>
              Github <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Take a look at my Github! You can find all of my projects there. This website is also open source, you can find it there too!
            </p>
          </a>

          <a href="https://www.linkedin.com/in/lukassobotik/" className={styles.card}>
            <h2 className={inter.className}>
              LinkedIn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Here you can find my LinkedIn profile. You can also contact me there.
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
