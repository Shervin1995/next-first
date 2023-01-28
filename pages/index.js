import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Layout, { siteTitle } from '../components/layout'


//
const inter = Inter({ subsets: ['latin'] })



//
export default function Home() {
  return (
    <>
      <Head>
        
        <meta name="description" content="Visualize your data in few minutes!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />

        <title> {siteTitle} - Home </title>

      </Head> 
      <main className={styles.main}>

        {/* body header */}
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.js</code>
          </p>
          <div>
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" >
              By{' '}
              <Image src="/vercel.svg" className={styles.vercelLogo} width={100} height={24} priority alt="Vercel Logo" />
            </a>
          </div>
        </div>

        {/* center section(1) */}
        <div className={styles.center}>
          <Image src="/favicon.png" className={styles.logo} width={180} height={37} priority  alt="Next.js Logo" />
          <div className={styles.thirteen}>
            <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
          </div>
        </div>

        {/* 1-4 parts section(2) */}
        <div className={styles.grid}>

          {/* (1) */}
          <a className={styles.card}
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank" rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a> 

          {/* (2) */}
          <a className={styles.card}
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank" rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          {/* (3) */}
          <a className={styles.card}
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank" rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          {/* (4) */}
          <a className={styles.card}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank" rel="noopener noreferrer"
          > 
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2> 
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p> 
          </a>


        </div>
      </main>
    </>
  )
}
