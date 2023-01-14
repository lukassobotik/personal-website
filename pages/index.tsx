import {Inter} from '@next/font/google'
import styles from '../styles/Home.module.css'
import Navbar from "./navbar";
import Link from "next/link";
import Head from "next/head";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  function calculateAge() {
    let birthdate = new Date(2007, 5, 10);
    let currentTime = new Date().getTime();
    let birthDateTime = new Date(birthdate).getTime();
    let ageInYears = (currentTime - birthDateTime) / 31_536_000_000;
    return Math.floor(ageInYears);
  }

  return (
    <>
      <Head>
        <title>Lukáš Sobotík</title>
      </Head>
      <div className={styles.background}/>
      <main className={styles.main}>
        <Navbar/>
        <div className={styles.title}>
          <h1>
            Hi, I am <span className={styles.name}>Lukáš</span>, a <span className={styles.name}>Full-Stack </span>developer.
          </h1>
        </div>
        <div className={styles.overview_section}>
          <h2 className={styles.featured}>
            About Me
          </h2>
          <div className={styles.overview}>
            <p>I am a student at Akademie VŠEM studying economics. Programming is my passion and it will most likely be my full time job after I graduate, so I am open to any job offers or internships. I am currently learning Java, and I have had a bit of experience with JavaScript and C# as well.</p>
          </div>
          <h2 className={styles.featured}>
            Personal Details
          </h2>
          <div className={styles.personal_details}>
            <p className={styles.name}>Name:</p>
            <p>Lukáš Sobotík</p>
            <p className={styles.name}>Age:</p>
            <p>{calculateAge()}</p>
            <p className={styles.name}>Job Status:</p>
            <p>Looking for a job</p>
          </div>
          <h2 className={styles.featured}>
            Skills
          </h2>
          <div className={styles.skills}>
            <Link href="https://www.java.com/" className={styles.skill}>
              <h3 className={inter.className}>
                Java <span>-&gt;</span>
              </h3>
            </Link>
            <Link href="https://firebase.google.com/" className={styles.skill}>
              <h3 className={inter.className}>
                Firebase <span>-&gt;</span>
              </h3>
            </Link>
            <Link href="https://git-scm.com/" className={styles.skill}>
              <h3 className={inter.className}>
                Git <span>-&gt;</span>
              </h3>
            </Link>
            <Link href="https://www.markdownguide.org/" className={styles.skill}>
              <h3 className={inter.className}>
                Markdown <span>-&gt;</span>
              </h3>
            </Link>
            <Link href="https://www.javascript.com/" className={styles.skill}>
              <h3 className={inter.className}>
                JavaScript <span>-&gt;</span>
              </h3>
            </Link>
            <Link href="https://reactjs.org/" className={styles.skill}>
              <h3 className={inter.className}>
                React <span>-&gt;</span>
              </h3>
            </Link>
            <Link href="https://www.arduino.cc/" className={styles.skill}>
              <h3 className={inter.className}>
                Arduino <span>-&gt;</span>
              </h3>
            </Link>
            <Link href="https://www.raspberrypi.org/" className={styles.skill}>
              <h3 className={inter.className}>
                Raspberry Pi <span>-&gt;</span>
              </h3>
            </Link>
            <Link href="https://www.blackmagicdesign.com/products/davinciresolve" className={styles.skill}>
              <h3 className={inter.className}>
                Davinci Resolve <span>-&gt;</span>
              </h3>
            </Link>
            <Link href="https://www.adobe.com/products/photoshop.html" className={styles.skill}>
              <h3 className={inter.className}>
                Photoshop <span>-&gt;</span>
              </h3>
            </Link>
            <Link href="https://www.blender.org/" className={styles.skill}>
              <h3 className={inter.className}>
                Blender <span>-&gt;</span>
              </h3>
            </Link>
            <Link href="https://learn.microsoft.com/en-us/dotnet/csharp/" className={styles.skill}>
              <h3 className={inter.className}>
                C# <span>-&gt;</span>
              </h3>
            </Link>
          </div>
        </div>
        <h2 className={styles.featured}>
          Featured Projects
        </h2>
        <div className={styles.grid}>
          <Link href="/project/MyFavMovies" className={styles.project}>
            <h3 className={inter.className}>
              MyFavMovies <span>-&gt;</span>
            </h3>
            <h5 className={inter.className}>
              JavaScript, React, Firebase
            </h5>
            <p className={inter.className}>
              MyFavMovies is a web application that allows you to search for movies and add them to your favorites.
            </p>
          </Link>
          <Link href="/project/myQuotes" className={styles.project}>
            <h3 className={inter.className}>
              myQuotes <span>-&gt;</span>
            </h3>
            <h5 className={inter.className}>
              Java, Android, Firebase
            </h5>
            <p className={inter.className}>
              myQuotes is an Android application where you can Share, Discover and Save New Quotes!
            </p>
          </Link>
          <Link href="/project/vsem-schedule-change-notifier" className={styles.project}>
            <h3 className={inter.className}>
              VŠEM Change Notifier <span>-&gt;</span>
            </h3>
            <h5 className={inter.className}>
              Java, JavaMail, JSoup
            </h5>
            <p className={inter.className}>
                VŠEM Schedule Change Notifier is a Java application that notifies you about changes in the schedule of your classes.
            </p>
          </Link>
          <Link href="/project/Repeaty" className={styles.project}>
            <h3 className={inter.className}>
              Repeaty <span>-&gt;</span>
            </h3>
            <h5 className={inter.className}>
              Java, Android, SQLite
            </h5>
            <p className={inter.className}>
              Repeaty is an android application to Track and Manage your Habits.
            </p>
          </Link>
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
