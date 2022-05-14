import Head from "next/head";
import styles from "../styles/Home.module.css";
import React from "react";
import Link from "next/link";
import {Button} from "@chakra-ui/react"
import AuthForm from "../components/AuthForm"
import Layout from "../components/layout"
import {useState ,useEffect} from "react"
import { getSession ,signIn, signOut, useSession } from "next-auth/client";

const NotLoggedIn = () => {
  return ( 
    <>
      <AuthForm />
    </>
  ) 
} 
 
export default function Home() {
  const [session,loading] = useSession(); 
  const [content,setContent] = useState() ;
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/secret");
      const json = await res.text();
      if(json.content){ 
        setContent(json.content) ;
      }
    } ;
    fetchData() ;
  } , [session]) ;
  if (typeof window !== "undefined" && loading) {
    return null
    
  } 
  if (session) {
    return(
      <>
            <p> Signed in as {session.user.id} </p>
            <p> {content}</p>
            <div>You can now access our super secret pages</div>
            <Button mb={6} colorScheme="orange">
              <Link href="/secret">Go to dashboard</Link>
            </Button>
            <Button onClick={()=> signOut({ 
              callbackUrl: "/",
            })}>sign out</Button>
      </>
    )
  } 

  return ( 
    <NotLoggedIn/> 
  )
}
export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
} 
