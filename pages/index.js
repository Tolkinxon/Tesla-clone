import Head from 'next/head'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import ModelY from '@/components/ModelY'
import ModelX from '@/components/ModelX'
import ModelS from '@/components/ModelS'
import SolarRoof from '@/components/SolarRoof'
import SolarPanel from '@/components/SolarPanel'
import Accessories from '../components/Accessories'

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
      <ModelS />
      <ModelX />
      <SolarPanel />
      <SolarRoof />
      <Accessories />
    </>
  )
}
