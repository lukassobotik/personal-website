import styles from '../styles/Home.module.css'
import Link from "next/link";
import Head from "next/head";
import FetchProjects from "./FetchProjects";
import Navbar from "../navbar";
import {useEffect} from "react";
// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';
import LazyLoadingImage from "../LazyLoadingImage";

export async function fetcher(url: string) {
  const res = await fetch(url);
  return res.json();
}

export default function Home() {
  function calculateAge() {
    let birthdate = new Date(2007, 4, 10);
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const birthdateYear = birthdate.getFullYear();
    const birthdateMonth = birthdate.getMonth();
    const birthdateDay = birthdate.getDate();

    let ageInYears = currentYear - birthdateYear;

    if (currentDate.getMonth() < birthdateMonth ||
        (currentDate.getMonth() === birthdateMonth &&
            currentDate.getDate() < birthdateDay)) {
      ageInYears--;
    }

    return ageInYears;
  }

  function decryptEffect() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+-=[]{};':\",./<>?`~";

    const el = document.getElementById("content_main_line");
    const text = "Hi, I'm Lukáš";

    if (el) {
      let iterations = 0;
      const interval = setInterval(() => {
        el.innerHTML = text.split("")
            .map((letter, index) => {
              if (index < iterations) return letter;

              return letters[Math.floor(Math.random() * letters.length)]
            }).join("");
        if (iterations >= text.length) clearInterval(interval);
        iterations += 1/3;
      }, 20);
    }
  }

  useEffect(() => {
    decryptEffect();
    AOS.init();
  }, []);

  return (
      <>
        <Head>
          <title>Lukáš Sobotík</title>
        </Head>
        <main className={styles.main}>
          <Navbar/>
          <div className={styles.content}>
            <div className={styles.main_image} data-aos="fade-right"><LazyLoadingImage alt="." src={"/images/banner.jpg"} width={800} height={1200}/></div>
            <div className={styles.content_main}>
              <div className={styles.content_main_line} id={"content_main_line"} onMouseEnter={decryptEffect}>Hi, I&apos;m Lukáš</div>
              <div className={styles.content_main_short_summary} data-aos="fade-up">I am a {calculateAge()}-year-old student from the Czech Republic.
                My interest is programming, thus I&#39;m open to any job or internship opportunities.
                I am now learning Java, and I have minor knowledge of JavaScript and C#.
                Since December 2021, I&#39;ve been actively programming.
              </div>
              <div className={styles.main_contact}>
                <div className={styles.main_contact_header} data-aos="fade-up" data-aos-delay="50">Contact</div>
                <div className={styles.main_contact_item} data-aos="fade-up" data-aos-delay="100"><Link href={"https://linkedin.com/in/lukassobotik/"} className={styles.url}>LinkedIn</Link></div>
                <div className={styles.main_contact_item} data-aos="fade-up" data-aos-delay="150"><Link href={"mailto://jobs@lukassobotik.dev"} className={styles.url}>Email</Link></div>
                <div className={styles.main_contact_item} data-aos="fade-up" data-aos-delay="200"><Link href={"https://github.com/lukassobotik"} className={styles.url}>Github</Link></div>
                <div className={styles.main_contact_item} data-aos="fade-up" data-aos-delay="250"><Link href={"https://www.buymeacoffee.com/lukassobotik"} className={styles.url}>Buy me a coffee</Link></div>
                <div className={styles.main_contact_item} data-aos="fade-up" data-aos-delay="300"><Link href={"/resume/junior-java-developer.pdf"} className={styles.url}>Resume</Link></div>
              </div>
            </div>
          </div>
          <div className={styles.general_section} data-aos="fade-up" data-aos-once={true}>
            <div className={styles.general_section_title}>Skills</div>
            <div className={styles.general_section_content}>
              <div className={styles.general_section_content_item}><Link className={styles.url} href={"/projects?technologies=java"}>Java</Link></div>
              <div className={styles.general_section_content_item}>Github</div>
              <div className={styles.general_section_content_item}><Link className={styles.url} href={"/projects?technologies=javascript"}>JavaScript</Link></div>
              <div className={styles.general_section_content_item}><Link className={styles.url} href={"/projects?technologies=typescript"}>TypeScript</Link></div>
              <div className={styles.general_section_content_item}>Davinci Resolve</div>
              <div className={styles.general_section_content_item}><Link className={styles.url} href={"/projects?technologies=firebase"}>Firebase</Link></div>
              <div className={styles.general_section_content_item}>Gimp</div>
              <div className={styles.general_section_content_item}>Photoshop</div>
              <div className={styles.general_section_content_item}>Blender</div>
              <div className={styles.general_section_content_item}><Link className={styles.url} href={"/projects?technologies=csharp"}>C#</Link></div>
            </div>
          </div>
          <div className={styles.general_section} data-aos="fade-up" data-aos-once={true}>
            <div className={styles.general_section_title}>Interests</div>
            <div className={styles.general_section_content}>
              <div className={styles.general_section_content_item}><Link className={styles.url} href={"https://www.imdb.com/user/ur150332429/"}>Movies</Link></div>
              <div className={styles.general_section_content_item}><Link className={styles.url} href={"https://www.chess.com/member/lukassobotik"}>Chess</Link></div>
              <div className={styles.general_section_content_item}>Writing</div>
              <div className={styles.general_section_content_item}>Boxing</div>
            </div>
          </div>
          <div className={styles.general_section} data-aos="fade-up" data-aos-once={true}>
            <div className={styles.general_section_title}>Certificates</div>
            <div className={styles.general_section_content}>
              <div className={styles.general_section_content_item}>
                <div className={styles.general_section_content_item_title}><Link className={styles.url} href={"https://www.efset.org/cert/sW8Md2"}>EF Standard English Test</Link></div>
                <div className={styles.general_section_content_item_subtitle}>My result is C2 Proficient. The EF Standard English Test is a free online English test that helps you assess your level of English.</div>
              </div>
            </div>
          </div>
          <div className={styles.section_header} data-aos="fade-up" data-aos-once={true}>Featured Projects</div>
          <FetchProjects onlyFeatured/>
          <div className={styles.main_other_projects} data-aos="fade-up" data-aos-once={true}>
            <Link className={styles.url} href={"/projects/"}>All Projects</Link>
          </div>
          <div className={styles.bottom}/>
        </main>
      </>
  )
}
