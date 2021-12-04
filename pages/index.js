import Head from 'next/head'
import ContactList from '../components/ContactList'

export default function Home() {
  return (
    <>
      <Head>
        <title>ContactList</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContactList/>
    </>
  )
}
