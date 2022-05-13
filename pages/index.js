import Head from "next/head";
import styles from "../styles/Home.module.css";
import React from "react";
import Link from "next/link";
import { Button } from "@chakra-ui/react"
import AuthForm from "../components/AuthForm"
import Layout from "../components/layout"
import { getSession, signIn, signOut, useSession } from "next-auth/client";


export default function Home() {
  const [session ,data ] = useSession({
    required: true ,
    onUnauthenticated(){ 
      <AuthForm />
    }
  })
  return (
    <>
      <p> Signed in as {session.user.id} </p>
      <div>You can now access our super secret pages</div>
      <Button mb={6} colorScheme="orange">
        <Link href="/secret">Go to dashboard</Link>
      </Button>
      <Button onClick={() => signOut({
        callbackUrl: "/",
      })}>sign out</Button>
    </>
  )
} 
