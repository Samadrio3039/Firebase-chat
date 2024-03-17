// src/components/ContactList.js
import React, { useState, useEffect } from "react";
import firebase from "./firebaseConfig";
import './contactList.css';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // const usersRef = firebase.database().ref("users");
    // usersRef.on("value", (snapshot) => {
    //   const usersData = snapshot.val();
    //   if (usersData) {
    //     const usersList = Object.values(usersData);
    //     setContacts(usersList);
    //   }
    // });
  }, []);

  return (
    <div className="container">
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>{contact.displayName}</li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
