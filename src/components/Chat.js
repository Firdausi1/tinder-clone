import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import "./Chat.css";
import { Link } from 'react-router-dom';

const Chat = ({name,message,timestamp,profilepic}) => {
    return (
        <Link to={`/chat/${name}`}>
        <div className="chat">
            <Avatar src={profilepic} alt={name}/>
            <div className="chat__details">
                <h2>{name}</h2>
                <p className="chat__message">{message}</p>
            </div>
    <p className="chat__timestamp">{timestamp}</p>
        </div>
        </Link>
    )
}

export default Chat;
