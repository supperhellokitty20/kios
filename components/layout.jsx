import Nav from "./nav"
import {useSession} from 'next-auth/client'
import styles from "../styles/Home.module.css";
import Head from "next/head";
export default function Layout({ children }) {
  const session = useSession()
  if(session!=null && session !=undefined){
    console.log(session)  ;
    return (
      <>
      <Nav session={session}>
          <div className={styles.container} > 
          <Head>
            <title>Home brewkios</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
            <main className={styles.main}>
            {children}
            </main>
          </div>
      </Nav> 
      </>
    )
  } 
    return <>
    </>
  }
