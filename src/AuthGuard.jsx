// src/components/Auth.js
import React, { useEffect, useState } from "react";
import "./authGuard.css";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import Chat from "./Chat";
import ContactList from "./ContactList";
// const admin = require("firebase-admin");

const serviceAccount = require("./serviceaccountKey.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });



const AuthGuard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const uid=sessionStorage.getItem('uid')
  const auth = getAuth();
  // const listAllUsers = async () => {
  //   try {
  //     const listUsersResult = await admin.auth().listUsers();
  //     const users = listUsersResult.users.map(userRecord => userRecord.toJSON());
  //     return users;
  //   } catch (error) {
  //     console.error("Error fetching users:", error);
  //     return [];
  //   }
  // };
  
  const handleSignIn = async () => {
    try {
      const signInResponse = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(signInResponse);
      const uid = signInResponse.user.uid;
      sessionStorage.setItem("uid", uid);
      
      // listAllUsers().then(users => {
      //   console.log("Users:", users);
      // });
      
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="container">
      {!sessionStorage.getItem('uid') ? (
        <>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSignIn}>Sign In</button>
          <button onClick={handleSignUp}>Sign Up</button>
        </>
      ) : (
        <>
          <Chat />
          <ContactList />
        </>
      )}
    </div>
  );
};

export default AuthGuard;
