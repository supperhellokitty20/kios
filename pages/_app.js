import "../styles/globals.css";
import { Provider } from "next-auth/client";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layout";
import {useSession} from "next-auth/client"
function MyApp({ 
  Component, 
  pageProps:{ 
    session,
    ...pageProps
}}) 
{
  return (
    <Provider session={pageProps.session}>
      <ChakraProvider> 
          { Component.auth ? ( 
          <Auth>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          </Auth>
          ):(  
            <Layout>
            <Component {...pageProps} />
            </Layout>
          ) 
          }
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;

function Auth({ children }) {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const { status } = useSession({ required: true })

  if (status === 'loading') {
    return( 
      <>
        <h1>Loading...</h1> 
      </>
    ) 
  }
  
  return children
}