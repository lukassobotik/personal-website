import {Inter} from '@next/font/google'
import styles from '../styles/Home.module.css'
import Navbar from "./navbar";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import FeaturedProjects from "./featuredProjects";
import {useEffect, useState} from "react";
import 'aos/dist/aos.css'
import { useRouter } from 'next/router';

const AOS = require('aos');

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  const [tabContent, setTabContent] = useState('');

  function calculateAge() {
    let birthdate = new Date(2007, 5, 10);
    let currentTime = new Date().getTime();
    let birthDateTime = new Date(birthdate).getTime();
    let ageInYears = (currentTime - birthDateTime) / 31_536_000_000;
    return Math.floor(ageInYears);
  }
  function homeClick() {
    router.push('/', undefined, { shallow: true });
  }
  function projectsClick() {
    router.push('/?tab=projects', undefined, { shallow: true });
  }
  function contactClick() {
    router.push('/?tab=contact', undefined, { shallow: true });
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
    AOS.init();
  })

  const homeTab = (
      <div className={styles.tabContent}>Home</div>
  );
  const projectsTab = (
      <div className={styles.tabContent}>Projects</div>
  );
  const contactTab = (
      <div className={styles.tabContent}>Contact</div>
  );

  useEffect(() => {
    const tab = router.query.tab;
    if (tab === "projects") {
      // @ts-ignore
      setTabContent(projectsTab);
    } else if (tab === "contact") {
      // @ts-ignore
      setTabContent(contactTab);
    } else {
      // @ts-ignore
      setTabContent(homeTab);
    }

  }, [router.query.tab]);

  return (
    <>
      <Head>
        <title>Lukáš Sobotík</title>
      </Head>
      <main className={styles.main}>
        <Image src="/images/banner" alt="" width={2000} height={300} className={styles.banner}/>
        <div className={styles.splitter}>
          <div className={styles.profile_info}>
            <Image src="/images/logo.jpg" alt="" width={300} height={300} className={styles.logo}/>
            <p>Lukáš Sobotík</p>
            <p>PuckyEU</p>
            <p>At Akademie VŠEM, I&#39;m a student majoring in economics.
              My interest is programming, thus I&#39;m open to any job or internship opportunities.
              I am now studying Java, and I have minor knowledge of JavaScript and C#.
              Since December 2021, I&#39;ve been actively learning programming.
              Since then, I have created Android applications and websites.
            </p>
            <p>I don&#39;t currently have any professional expertise in software development, but I&#39;d really like to. </p>
          </div>
          {/*Navbar*/}
          <div className={styles.description}>
            <div className={styles.navbar}>
                <span className={styles.navbar_item} onClick={homeClick}>
                    <h4>
                        Home
                    </h4>
                </span>
                <span className={styles.navbar_item} onClick={projectsClick}>
                    <h4>
                        Projects
                    </h4>
                </span>
                <span className={styles.navbar_item} onClick={contactClick}>
                    <h4>
                        Contact
                    </h4>
                </span>
            </div>
        </div>
        </div>
        <div className={styles.tab}>
          {tabContent}
        </div>

        {/* Old Design */}
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
            <p>At Akademie VŠEM, I&#39;m a student majoring in economics.
              My interest is programming, thus I&#39;m open to any job or internship opportunities.
              I am now studying Java, and I have minor knowledge of JavaScript and C#.
              Since December 2021, I&#39;ve been actively learning programming.
              Since then, I have created Android applications and websites.
            </p>
            <p>I don&#39;t currently have any professional expertise in software development, but I&#39;d really like to. </p>
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
          <a href="https://github.com/PuckyEU/puckyeu.github.io" data-aos="fade-up" className={styles.card}>
            <h2 className={inter.className}>
              Source Code <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Here you can find all of my source code for this website. If you have any questions or suggestions, feel free to contact me!
            </p>
          </a>
          <a href="https://www.buymeacoffee.com/puckyeu" data-aos="fade-up" data-aos-delay="100" className={styles.card}>
            <h2 className={inter.className}>
              Buy Me A Coffee <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              You can buy me a coffee if you want to support me! I would really appreciate it!
            </p>
          </a>
          <a href="https://github.com/PuckyEU" data-aos="fade-up" data-aos-delay="200" className={styles.card}>
            <h2 className={inter.className}>
              Github <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Take a look at my Github! You can find all of my projects there. This website is also open source, you can find it there too!
            </p>
          </a>
          <a href="https://www.linkedin.com/in/lukassobotik/" data-aos="fade-up" data-aos-delay="300" className={styles.card}>
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
