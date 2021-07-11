import Head from 'next/head'
import Layout from '../components/layouts/Layout';
import {getUser} from '../lib/getUser';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>EndePointe</title>
      </Head>
      <main>
      </main>
    </Layout>
  )
}