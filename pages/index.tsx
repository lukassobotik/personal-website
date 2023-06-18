import {Inter} from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import Head from "next/head";
import FetchProjects from "./FetchProjects";
import {useEffect, useState} from "react";
import {useRouter} from 'next/router';
import {fetchProjectsByFeatured, Project} from "./project/[projectId]";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();

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

  return (
      <>
        <Head>
          <title>Lukáš Sobotík</title>
        </Head>
        <main className={styles.main}>
          <div className={styles.header}>
            <div className={styles.header_name}>Lukáš Sobotík</div>
            <div className={styles.header_tabs}>
              <Link href="/" className={styles.header_tab}>
                  <h3 className={inter.className}>
                      Home
                  </h3>
              </Link>
              <Link href="/projects" className={styles.header_tab}>
                  <h3 className={inter.className}>
                      Projects
                  </h3>
              </Link>
              <Link href="/contact" className={styles.header_tab}>
                  <h3 className={inter.className}>
                      Contact
                  </h3>
              </Link>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.main_image}>.</div>
            <div className={styles.content_main}>
              <div className={styles.content_main_line}>Hi, I&apos;m Lukáš</div>
              <div className={styles.content_main_short_summary}>I am a {calculateAge()}-year-old student from the Czech Republic.
                My interest is programming, thus I&#39;m open to any job or internship opportunities.
                I am now studying Java, and I have minor knowledge of JavaScript and C#.
                Since December 2021, I&#39;ve been actively programming.</div>
              <div className={styles.main_contact}>
                <div className={styles.main_contact_header}>Contact</div>
                <div className={styles.main_contact_item}><Link href={"https://linkedin.com/in/lukassobotik/"} className={styles.url}>LinkedIn</Link></div>
                <div className={styles.main_contact_item}><Link href={"mailto://jobs@lukassobotik.dev"} className={styles.url}>Email</Link></div>
                <div className={styles.main_contact_item}><Link href={"https://github.com/PuckyEU"} className={styles.url}>Github</Link></div>
                <div className={styles.main_contact_item}><Link href={"https://www.buymeacoffee.com/puckyeu"} className={styles.url}>Buy me a coffee</Link></div>
                <div className={styles.main_contact_item}><Link href={"https://lukassobotik.dev/resume/junior-java-developer.pdf"} className={styles.url}>Resume</Link></div>
              </div>
            </div>
          </div>
          <div className={styles.general_section}>
            <div className={styles.general_section_title}>Skills</div>
            <div className={styles.general_section_content}>
              <div className={styles.general_section_content_item}>Java</div>
              <div className={styles.general_section_content_item}>Github</div>
              <div className={styles.general_section_content_item}>Javascript</div>
              <div className={styles.general_section_content_item}>Davinci Resolve</div>
              <div className={styles.general_section_content_item}>Firebase</div>
              <div className={styles.general_section_content_item}>C#</div>
            </div>
          </div>
          <div className={styles.general_section}>
            <div className={styles.general_section_title}>Interests</div>
            <div className={styles.general_section_content}>
              <div className={styles.general_section_content_item}><Link className={styles.url} href={"https://www.imdb.com/user/ur150332429/"}>Movies</Link></div>
              <div className={styles.general_section_content_item}><Link className={styles.url} href={"https://www.chess.com/member/puckyeu"}>Chess</Link></div>
              <div className={styles.general_section_content_item}>Writing</div>
              <div className={styles.general_section_content_item}>Boxing</div>
            </div>
          </div>
          <div className={styles.general_section}>
            <div className={styles.general_section_title}>Certificates</div>
            <div className={styles.general_section_content}>
              <div className={styles.general_section_content_item}>
                <div className={styles.general_section_content_item_title}><Link className={styles.url} href={"https://www.efset.org/cert/sW8Md2"}>EF Standard English Test</Link></div>
                <div className={styles.general_section_content_item_subtitle}>My result is C2 Proficient. The EF Standard English Test is a free online English test that helps you assess your level of English.</div>
              </div>
            </div>
          </div>
          <div className={styles.section_header}>Featured Projects</div>
          <FetchProjects onlyFeatured/>
          <div className={styles.main_other_projects}>
            <Link className={styles.url} href={"/projects/"}>All Projects</Link>
          </div>
        </main>
      </>
  )

  // return (
  //   <>
  //     <Head>
  //       <title>Lukáš Sobotík</title>
  //     </Head>
  //     <main className={styles.main}>
  //       <Image src="/images/banner.jpg" alt="" width={2000} height={300} className={styles.banner}/>
  //       <div className={styles.splitter}>
  //         <div className={styles.profile_info}>
  //           <div className={styles.logo_parent}>
  //             <Image src="/images/logo.jpg" alt="" width={300} height={300} className={styles.logo}/>
  //           </div>
  //           <p className={styles.profile_name_main}>Lukáš Sobotík</p>
  //           <p className={styles.profile_name}>PuckyEU</p>
  //           <p className={styles.bio}>At Akademie VŠEM, I&#39;m a student majoring in economics.
  //             My interest is programming, thus I&#39;m open to any job or internship opportunities.
  //             I am now studying Java, and I have minor knowledge of JavaScript and C#.
  //             Since December 2021, I&#39;ve been actively learning programming.
  //             Since then, I have created Android applications and websites.
  //           </p>
  //           <p className={styles.bio}>I don&#39;t currently have any professional expertise in software development, but I&#39;d really like to. </p>
  //           <p className={styles.bio}>Age: {calculateAge()}</p>
  //           <p className={styles.bio}>Job Status: Looking for a job</p>
  //           <p className={styles.profile_link}><a href="/resume/junior-java-developer.pdf">Resume</a></p>
  //           <p className={styles.profile_link}><a href="https://github.com/PuckyEU/puckyeu.github.io">Source Code</a></p>
  //           <p className={styles.profile_link}><a href="https://www.buymeacoffee.com/puckyeu">BuyMeACoffee</a></p>
  //           <p className={styles.profile_link}><a href="https://github.com/PuckyEU">Github</a></p>
  //           <p className={styles.profile_link}><a href="https://www.linkedin.com/in/lukassobotik/">LinkedIn</a></p>
  //           <p className={styles.profile_link}><a href="https://play.google.com/store/apps/dev?id=6212701078283176937">Google Play</a></p>
  //           <p className={styles.profile_link}><a href="https://twitter.com/PuckyEU">Twitter</a></p>
  //           <p className={styles.profile_link}><a href="https://youtube.com/@PuckyEU">YouTube</a></p>
  //           <p className={styles.profile_link}><a href="https://www.codewars.com/users/PuckyEU">CodeWars</a></p>
  //         </div>
  //         {/*Links*/}
  //         <div className={styles.description}>
  //           <div className={styles.links}>
  //               <span className={styles.navbar_item} onClick={homeClick}>
  //                   <h4>
  //                       Home
  //                   </h4>
  //               </span>
  //               <span className={styles.navbar_item} onClick={projectsClick}>
  //                   <h4>
  //                       Projects
  //                   </h4>
  //               </span>
  //               <span className={styles.navbar_item} onClick={contactClick}>
  //                   <h4>
  //                       Contact
  //                   </h4>
  //               </span>
  //           </div>
  //       </div>
  //       </div>
  //       <div className={styles.tab}>
  //         {tabContent}
  //       </div>
  //     </main>
  //   </>
  // )
}
