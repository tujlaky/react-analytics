import { init } from "next-firebase-auth";

function initAuth() {
  init({
    authPageURL: "/login",
    appPageURL: "/",
    loginAPIEndpoint: "/api/login",
    logoutAPIEndpoint: "/api/logout",
    onLoginRequestError: (err) => {
      console.error(err);
    },
    onLogoutRequestError: (err) => {
      console.error(err);
    },
    firebaseAdminInitConfig: {
      credential: {
        projectId: "logs-b314f",
        clientEmail:
          "firebase-adminsdk-nx58w@logs-b314f.iam.gserviceaccount.com",
        privateKey: process.env.FIREBASE_PRIVATE_KEY || "",
      },
      databaseURL:
        "https://logs-b314f-default-rtdb.europe-west1.firebasedatabase.app",
    },
    firebaseClientInitConfig: {
      apiKey: "AIzaSyCUBXHnbDtpQ4nvKzGmFZqYVXFTWxzZUKY",
      authDomain: "logs-b314f.firebaseapp.com",
      databaseURL:
        "https://logs-b314f-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "logs-b314f",
      storageBucket: "logs-b314f.appspot.com",
      messagingSenderId: "289491374398",
      appId: "1:289491374398:web:148b16761c6283443ddc6f",
    },
    cookies: {
      name: "logs", // required
      // Keys are required unless you set `signed` to `false`.
      // The keys cannot be accessible on the client side.
      keys: [
        process.env.COOKIE_SECRET_CURRENT,
        process.env.COOKIE_SECRET_PREVIOUS,
      ],
      httpOnly: true,
      maxAge: 12 * 60 * 60 * 24 * 1000, // twelve days
      overwrite: true,
      path: "/",
      sameSite: "strict",
      secure: false, // set this to false in local (non-HTTPS) development
      signed: true,
    },
    onVerifyTokenError: (err) => {
      console.error(err);
    },
    onTokenRefreshError: (err) => {
      console.error(err);
    },
  });
}

export default initAuth;
