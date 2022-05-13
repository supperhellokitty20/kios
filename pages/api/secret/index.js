import { getSession } from "next-auth/client";

export default async (req, res) => {
  const session = await getSession({ req });
  //Query data here 
  const id = session.user.id ; 

  //Basic auth check
  if (session) {
    res.send({
      //Also start query for user data from db 
      content: "Dash board with secret content",
    });
  } else {
    res.send({
      error: "You not authorized",
    });
  }
};
