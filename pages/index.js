import Head from 'next/head'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import ModelY from '@/components/ModelY'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tesla clone</title>
        <meta name="Tolkinxon" content="about tesla company" />
      </Head>

      <Navbar />
      <Header />
      <ModelY />
    </>
  )
}
