import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from "next/link";
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
        </div>
      </main>
    </>
  )
}
