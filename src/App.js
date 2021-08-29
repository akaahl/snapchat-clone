import React from "react";
import "./App.css";
import WebcamCapture from "./components/WebcamCapture/WebcamCapture";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Preview from "./components/Preview/Preview";
import Chats from "./components/Chats/Chats";
import ChatView from "./components/Chats/ChatView/ChatView";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./features/appSlice";
import Login from "./components/Login/Login";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <div className="app__body">
            <Switch>
              <Route exact path="/">
                <WebcamCapture />
              </Route>
              <Route path="/preview">
                <Preview />
              </Route>
              <Route path="/chats/view">
                <ChatView />
              </Route>
              <Route path="/chats">
                <Chats />
              </Route>
            </Switch>
          </div>
        )}
      </Router>
    </div>
  );
}

export default App;
