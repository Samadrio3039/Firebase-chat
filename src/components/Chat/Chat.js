// src/components/Chat.js
import React, { useState, useEffect } from 'react';
import { auth, firestore } from '../../firebaseConfig';
import FriendList from '../FriendsList/FriendsList'

const Chat = ({ user }) => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore
      .collection('users')
      .doc(user.uid)
      .collection('friends')
      .onSnapshot((snapshot) => {
        const friendsData = snapshot.docs.map((doc) => doc.data());
        setFriends(friendsData);
      });

    return () => unsubscribe();
  }, [user.uid]);

  return (
    <div>
      <h1>Welcome, {user.displayName}</h1>
      <FriendList friends={friends} />
    </div>
  );
};

export default Chat;
