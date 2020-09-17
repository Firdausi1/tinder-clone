import React,{useState, useEffect} from 'react';
import database from "../firebase";
import SwipeCard from 'react-tinder-card';
import "./Card.css"

const SwipeCards = () => {
    const [people, setPeople] = useState([]);
    useEffect(() => {
        database.collection('people').onSnapshot(snapshot => (
            setPeople(snapshot.docs.map(doc => doc.data()))    
        ))
    }, [])
    return (
        <div>
            <div className="card__container"> 
                {people.map(person => (
                    <SwipeCard className="swipe" key={person.name}
                    preventSwipe={["up","down"]}>
                        <div style={{backgroundImage: `url(${person.url})`}} className="card"><h3>{person.name}</h3></div>
                    </SwipeCard>
                ))}
            </div>
        </div>
    )
}

export default SwipeCards;