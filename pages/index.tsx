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
              Java & JavaScript full stack developer with a passion for learning and creating new things.
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          <a href="" className={styles.card}>
            <h2 className={inter.className}>
              Card <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget
            </p>
          </a>

          <a href="" className={styles.card}>
            <h2 className={inter.className}>
              Card <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget
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
