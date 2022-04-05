import type { NextPage } from 'next'
import Head from 'next/head'

import { Layout, ContactMe } from '@/components/Layout'

const Portfolio: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Portfolio - Mohamed Elidrissi</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className="space-y-24">
        <ContactMe />
      </div>
    </Layout>
  )
}

export default Portfolio
