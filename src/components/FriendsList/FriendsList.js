// src/components/FriendList.js
import React from 'react';

const FriendList = ({ friends }) => {
  return (
    <div>
      <h2>Friends List</h2>
      <ul>
        {friends.map((friend) => (
          <li key={friend.uid}>{friend.displayName}</li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
