import Image from 'next/image'
import styles from './page.module.css'

async function getPosts() {
  const res = await fetch('/api/getPosts')
}
export default function Home() {
  return (
    <main className={styles.main}>
      
    </main>
  )
}
