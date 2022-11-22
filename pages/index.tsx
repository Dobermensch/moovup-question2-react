import Head from 'next/head'
import styles from '../styles/shared.module.css'

import Header from '../components/Header'
import FriendList from '../components/FriendList'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Moovup</title>
        <meta name="description" content="Question 2 in Moovup take home test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header title={"All Friends"} />

        <FriendList />
      </main>
    </div>
  )
}
