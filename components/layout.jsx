import Nav from "./nav"
import {useSession} from 'next-auth/client'
import styles from "../styles/Home.module.css";
import Head from "next/head";
import AuthForm from "../components/AuthForm";
export default function Layout({ children }) {
  const [session,loading] = useSession({ 
    required : true, 
    onUnauthenticated(){ 
      window.location.href = "/"
    }
  })
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
  if(loading){ 
    return <>
      <p>Loading ...</p>
    </>
  }
  //Not logged in user
  return (
    <>
    <AuthForm/>
    </>
  ) 
  }
