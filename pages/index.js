import Head from "next/head"
import { Inter } from "@next/font/google"
import Navbar from "@/components/Navbar"
import Contact from "@/pages/Contact"
import About from "@/pages/About"
import Skills from "@/pages/Skills"
import Main from "@/pages/Main"
import Projects from "@/pages/Projects"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Halimeh's portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <Footer />
    </>
  )
}
