import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
  providers: [
    Providers.Google({ 
      clientId: process.env.GOOGLE_ID,
      clientSecret:process.env.GOOGLE_SECRET ,
    }) , 
    Providers.Auth0({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      domain: process.env.AUTH0_DOMAIN,
    }),
    Providers.Email({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  pages:{ 
    signIn: "/auth/signin",
    signOut: "/auth/signout",
  } ,
  callbacks: {
      jwt: async (token, user, account, profile, isNewUser) => {
          //  "user" parameter is the object received from "authorize"
          //  "token" is being send below to "session" callback...
          //  ...so we set "user" param of "token" to object from "authorize"...
          //  ...and return it...
          console.log("jwt", token);
          console.log("profile",profile) ;
          console.log("user", user ); 
          console.log("account",account) ;
          console.log("\n")
          user && (token.user = profile);
          return Promise.resolve(token)   // ...here
      },
      session: async (session, user, sessionToken) => {
          //  "session" is current session object
          //  below we set "user" param of "session" to value received from "jwt" callback
          console.log("session", session, user, sessionToken);
          session.user = user.user;
          return Promise.resolve(session)
      },
  
    /*
    signIn: async (user, account, profile) => {
      //Start query database here 
      console.log('signin', { user, account, profile });
      return Promise.resolve(true);
    },
    session : async ({ session, user, token }) => {
        console.log("session", { session, user, token });
      return session
    },
    jwt: async ({ token, user, account, profile, isNewUser }) => {
      console.log('jwt', { token, user, account, profile });
      return token
    }
    */
  } ,
  session: {
    strategy: 'jwt',
  },
}

export default (req, res) => NextAuth(req, res, options);
