import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import SwipeCards from './components/SwipeCards';
import SwipeButton from './components/SwipeButton';
import Chats from './components/Chats';
import ChatScreen from './components/ChatScreen';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/chat/:name">
        <Header backButton="/chat"/>
        <ChatScreen/>
        </Route>
        <Route path="/chat">
          <Header backButton="/"/>
          <Chats/>
        </Route>
        <Route path="/">
          <Header/>
          <SwipeCards/>
          <SwipeButton/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
