import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Layout } from '@/components/Layout/Layout'
import { Header } from '@/components/Header/Header'

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Reddit-mirror</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Header />
      </Layout>
    </>
  )
}
