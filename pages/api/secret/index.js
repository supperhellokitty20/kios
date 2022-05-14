import { getSession } from "next-auth/client";

export default async (req, res) => {
  const session = await getSession({ req });
  //Query data here 
  const id = session.user.id ; 

  //Basic auth check
  if (session) {
    res.send({
      content: "Dash board with secret content",
    });
  } else {
    res.send({
      error: "You not authorized",
    });
  }
};
