import {Inter} from '@next/font/google'
import styles from '../styles/Home.module.css'
import Navbar from "./navbar";
import Link from "next/link";
import Head from "next/head";
import FeaturedProjects from "./featuredProjects";
import {useEffect} from "react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  function calculateAge() {
    let birthdate = new Date(2007, 5, 10);
    let currentTime = new Date().getTime();
    let birthDateTime = new Date(birthdate).getTime();
    let ageInYears = (currentTime - birthDateTime) / 31_536_000_000;
    return Math.floor(ageInYears);
  }

  useEffect(() => {
    window?.addEventListener(
        "scroll",
        () => {
          document.body.style.setProperty(
              "--scroll",
              (window.scrollY / (document.body.offsetHeight - window.innerHeight)).toString()
          );
        },
        false
    );
  })

  return (
    <>
      <Head>
        <title>Lukáš Sobotík</title>
      </Head>
      <main className={styles.main}>
        <Navbar/>
        <div className={styles.title}>
          <p>
            Hi, I&#39;m
          </p>
          <span className={styles.name}>Lukáš</span>
          <div>
            a Full-Stack developer.
          </div>
        </div>
        <div className={styles.overview_section}>
          <h2 className={styles.featured}>
            About Me
          </h2>
          <div className={styles.overview}>
            <p>I&#39;m a student at Akademie VŠEM studying economics. Programming is my passion, and I am open to any job offers or internships. Currently, I am learning Java, and I have had a bit of experience with JavaScript and C#. Since December 2021, I have been actively learning programming. I have developed Android applications and websites since then.</p>
            <p>At the moment, I have no professional experience with software development, but I would love to get some.</p>
          </div>
          <h2 className={styles.featured}>
            Personal Details
          </h2>
          <div className={styles.personal_details}>
            <p className={styles.small_name}>Name:</p>
            <p>Lukáš Sobotík</p>
            <p className={styles.small_name}>Age:</p>
            <p>{calculateAge()}</p>
            <p className={styles.small_name}>Job Status:</p>
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
          <h2 className={styles.featured}>
            Interests
          </h2>
          <div className={styles.skills}>
            <Link href="https://www.imdb.com/user/ur150332429/" className={styles.skill}>
              <h3 className={inter.className}>
                Movies <span>-&gt;</span>
              </h3>
            </Link>
            <Link href="https://www.chess.com/member/puckyeu" className={styles.skill}>
              <h3 className={inter.className}>
                Chess <span>-&gt;</span>
              </h3>
            </Link>
            <div className={styles.skill}>
              <h3 className={inter.className}>
                Writing
              </h3>
            </div>
            <div className={styles.skill}>
              <h3 className={inter.className}>
                Boxing
              </h3>
            </div>
          </div>
          <h2 className={styles.featured}>
            Certificates
          </h2>
          <div className={styles.certificates}>
            <a href="https://www.efset.org/cert/sW8Md2" className={styles.card}>
              <h2 className={inter.className}>
                EF Standard English Test <span>-&gt;</span>
              </h2>
              <p className={inter.className}>
                My result is C2 Proficient.
                The EF Standard English Test is a free online English test that helps you assess your level of English.
              </p>
            </a>
          </div>
          <h2 className={styles.featured}>
            CV
          </h2>
          <div className={styles.skills}>
            <a href="/resume/junior-java-developer.pdf" className={styles.skill}>View CV</a>
            <a href="/resume/junior-java-developer.pdf" download="lukas-sobotik-resume" className={styles.skill}>Download CV</a>
          </div>
        </div>
        <h2 className={styles.featured}>
          Featured Projects
        </h2>

        <FeaturedProjects/>
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
