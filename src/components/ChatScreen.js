import React,{useState} from 'react';
import './ChatScreen.css'
import { Avatar } from '@material-ui/core';

const ChatScreen = () => {
    const [input, setInput] = useState("")
    const [messages, setMessages] = useState([
        {
            name:"mark",
            image:"...",
            message:"Hello"
        },
        {
            name:"mark",
            image:"...",
            message:"whats up"
        },
        {
            message:"How are you?"
        }
    ])

    const handleSend = (e) => {
        e.preventDefault();
        setMessages([
            ...messages,
            {
            message: input
        }
        ])
        setInput(" ")
    }

    return (
        <div>
            <h2 className="chatScreen__timestamp">YOU MATCHED WITH MARK ON 10/08/2019</h2>
            {messages.map(message => (
                message.name ? (
                    <div className="chatScreen__message">
                    <Avatar className="chatScreen__image"/>
                    <p className="chatScreen__text">{message.message}</p>
                </div>
                ):(
                    <div className="chatScreen__message">
                    <p className="chatScreen__textUser">{message.message}</p>
                    </div>
                )
                
            ))}
            <form onSubmit={handleSend} className="chatScreen__form">
                <input value={input} onChange={(e) => setInput(e.target.value)} className="chatScreen__input" placeholder="Type here"/>
                <button className="chatScreen__button" type="submit">SEND</button>
            </form>

        </div>
    )
}

export default ChatScreen 
