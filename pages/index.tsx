import {Inter} from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import FeaturedProjects from "./featuredProjects";
import {useEffect, useState} from "react";
import { useRouter } from 'next/router';
import {fetchProjectsByFeatured, Project} from "./project/[projectId]";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  const [tabContent, setTabContent] = useState('');
  const [otherProjects, setOtherProjects] = useState<Project[]>();

  function calculateAge() {
    let birthdate = new Date(2007, 5, 10);
    let currentTime = new Date().getTime();
    let birthDateTime = new Date(birthdate).getTime();
    let ageInYears = (currentTime - birthDateTime) / 31_536_000_000;
    return Math.floor(ageInYears);
  }
  function homeClick() {
    router.push('/', undefined, {shallow: true}).then(() => {});
  }
  function projectsClick() {
    router.push('/?tab=projects', undefined, { shallow: true }).then(() => {});
  }
  function contactClick() {
    router.push('/?tab=contact', undefined, { shallow: true }).then(() => {});
  }

  const homeTab = (
      <div className={styles.tabContent}>
        <div className={styles.post}>
          <h2>Skills</h2>
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
        <div className={styles.post}>
          <h2>Interests</h2>
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
        </div>
        <div className={styles.post}>
          <h2>Certificates</h2>
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
        </div>
      </div>
  );
  const projectsTab = (
      <div className={styles.tabContent}>
        <FeaturedProjects/>
        <div className={styles.post}>
          <h2>
            Other Projects
          </h2>
          <div className={styles.grid}>
            {otherProjects && otherProjects.map((project, id) => (
                <Link href={"/project/" + project.id} className={styles.project} key={id}>
                  <div className={styles.post_text}>
                    <h3 className={inter.className}>
                      {project.name} <span>-&gt;</span>
                    </h3>
                    <h5 className={inter.className}>
                      {project.technologies}
                    </h5>
                    <p className={inter.className}>
                      {project?.shortDescription[1]}
                    </p>
                  </div>
                </Link>
            ))}
          </div>
        </div>
      </div>
  );
  const contactTab = (
      <div className={styles.tabContent}>
        <div className={styles.post}>
          <h2>
            Contact Me
          </h2>
          <div className={styles.grid}>
            <a href="https://www.linkedin.com/in/lukassobotik/" className={styles.card}>
              <h2 className={inter.className}>
                LinkedIn <span>-&gt;</span>
              </h2>
              <p className={inter.className}>
                Here you can find my LinkedIn profile. You can also contact me there.
              </p>
            </a>
            <a href="mailto:sobotik.lukas@proton.me" className={styles.card}>
              <h2 className={inter.className}>
                Email <span>-&gt;</span>
              </h2>
              <p className={inter.className}>
                This is my email address. You can contact me here. I will try to respond as soon as possible.
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

            <a href="/resume/junior-java-developer.pdf" className={styles.card}>
              <h2 className={inter.className}>
                CV <span>-&gt;</span>
              </h2>
              <p className={inter.className}>
                Here you can find my CV. You can download it here.
              </p>
            </a>
          </div>
        </div>
      </div>
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

    fetchProjectsByFeatured(false).then(projects => {
      setOtherProjects(projects);
      console.log(projects);
    });

  }, [router.query.tab]);

  return (
    <>
      <Head>
        <title>Lukáš Sobotík</title>
      </Head>
      <main className={styles.main}>
        <Image src="/images/banner.jpg" alt="" width={2000} height={300} className={styles.banner}/>
        <div className={styles.splitter}>
          <div className={styles.profile_info}>
            <div className={styles.logo_parent}>
              <Image src="/images/logo.jpg" alt="" width={300} height={300} className={styles.logo}/>
            </div>
            <p className={styles.profile_name_main}>Lukáš Sobotík</p>
            <p className={styles.profile_name}>PuckyEU</p>
            <p className={styles.bio}>At Akademie VŠEM, I&#39;m a student majoring in economics.
              My interest is programming, thus I&#39;m open to any job or internship opportunities.
              I am now studying Java, and I have minor knowledge of JavaScript and C#.
              Since December 2021, I&#39;ve been actively learning programming.
              Since then, I have created Android applications and websites.
            </p>
            <p className={styles.bio}>I don&#39;t currently have any professional expertise in software development, but I&#39;d really like to. </p>
            <p className={styles.bio}>Age: {calculateAge()}</p>
            <p className={styles.bio}>Job Status: Looking for a job</p>
            <p className={styles.profile_link}><a href="/resume/junior-java-developer.pdf">Resume</a></p>
            <p className={styles.profile_link}><a href="https://github.com/PuckyEU/puckyeu.github.io">Source Code</a></p>
            <p className={styles.profile_link}><a href="https://www.buymeacoffee.com/puckyeu">BuyMeACoffee</a></p>
            <p className={styles.profile_link}><a href="https://github.com/PuckyEU">Github</a></p>
            <p className={styles.profile_link}><a href="https://www.linkedin.com/in/lukassobotik/">LinkedIn</a></p>
            <p className={styles.profile_link}><a href="https://play.google.com/store/apps/dev?id=6212701078283176937">Google Play</a></p>
            <p className={styles.profile_link}><a href="https://twitter.com/PuckyEU">Twitter</a></p>
            <p className={styles.profile_link}><a href="https://youtube.com/@PuckyEU">YouTube</a></p>
            <p className={styles.profile_link}><a href="https://www.codewars.com/users/PuckyEU">CodeWars</a></p>
          </div>
          {/*Links*/}
          <div className={styles.description}>
            <div className={styles.links}>
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
      </main>
    </>
  )
}
