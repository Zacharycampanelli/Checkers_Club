import React, { useState } from 'react';
import { Image } from '@chakra-ui/react';
// import io from 'socket.io-client';
// import Chat from '../components/Chat'
// const socket = io.connect('http://localhost:3001');
import Construction from '../assets/Under-Construction-Sign.png';

function Chatroom() {
  // const [username, setUserName] = useState('');
  // const [room, setRoom] = useState('');
  // const [showChat, setShowChat] = useState(false);

  // const joinRoom = () => {
  //   if (username !== '' && room !== '') {
  //     socket.emit('join_room', room);
  //     setShowChat(true);
  //   }
  // };

  return (
    <div className="App">
      <Image src={Construction} />
      {/* {!showChat ? (
        <div className="joinChatContainer">
          <h3>Join A Chat</h3>
          <input
            type="text"
            placeholder="Zack...."
            onChange={(event) => {
              setUserName(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Room ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button onClick={joinRoom}>Join A Room</button>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )} */}
    </div>
  );
}

export default Chatroom;
