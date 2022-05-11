import "../styles/globals.css";
import { Provider } from "next-auth/client";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layout";
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
        <Layout>
           <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
