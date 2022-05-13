import Nav from "./nav"
import {useSession} from 'next-auth/client'
export default function Layout({ children }) {
  const session = useSession()
  if(session!=null && session !=undefined){
    console.log(session)  ;
    return (
      <>
      <Nav session={session}>
        {children}
      </Nav> 
      </>
    )
  } 
    return <></>
  }
