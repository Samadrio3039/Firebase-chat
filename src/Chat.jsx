import React, { useState, useEffect } from "react";
import {
    getAuth,
  } from "firebase/auth";
  import { collection, query, FieldValue } from "firebase/firestore"; 
import {db} from './firebaseConfig'
const Chat = () => {
  const [message, setMessage] = useState("");
  const [recipient, setRecipient] = useState(null);
  const [messages, setMessages] = useState([]);
  const messagesRef = collection(db, "messages");

  useEffect(() => {
    // Fetch messages between the current user and the selected recipient
    const fetchMessages = async () => {
      try {
        const currentUser = getAuth().currentUser;
        if (!currentUser || !recipient) return;

        
        const newQuery = await query(messagesRef)
        // const snapshot = await newQuery.get();
        const fetchedMessages = newQuery.docs.map(doc => doc.data());
        setMessages(fetchedMessages);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, [recipient]);

  const sendMessage = async () => {
    try {
      const currentUser = getAuth().currentUser;
      if (!currentUser || !recipient || !message.trim()) return;

      const newMessage = {
        content: message,
        senderId: currentUser.uid,
        recipientId: recipient.uid,
        timestamp: FieldValue.serverTimestamp()
      };

      await collection("messages").add(newMessage);
      setMessage(""); // Clear the message input field
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div>
      <select value={recipient ? recipient.email : ""} onChange={(e) => setRecipient(e.target.value)}>
        <option value="">Select recipient</option>
        <option>WNIRYIEoGuXtZYD2yAYm94CF3cj2</option>
        {/* Render a list of authenticated users as options */}
        {/* You can fetch this list from Firestore or another source */}
      </select>

      <ul>
        {messages.map((message, index) => (
          <li key={index}>
            {message.content}
          </li>
        ))}
      </ul>

      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter your message"
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;
