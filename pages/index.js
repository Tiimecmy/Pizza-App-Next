import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Featured from './components/Featured'
import PizzaList from './components/PizzaList'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant in BKK</title>
        <meta name="description" content="Good quality pizza details & topping. No.1 on Cheese!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <PizzaList />
    </div>
  )
}
