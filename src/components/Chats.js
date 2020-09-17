import React from 'react';
import Chat from './Chat';

const Chats = () => {
    return (
        <div className="chats">
            <Chat name="mark"
            message="hello"
            timestamp="40 seconds ago"
            profilepic="..."/>
            <Chat name="mark"
            message="hello"
            timestamp="40 seconds ago"
            profilepic="..."/>
        </div>
    )
}

export default Chats
