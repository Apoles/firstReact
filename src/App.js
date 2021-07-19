import "./App.css";
import TextUi from "./TextUi";
import Header from "./Header";
import a from "./image/a.png";
import React, { useEffect } from "react";
import "./Support.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Support from "./Support.js";
import axios from "axios";

export const fetchPosts = async () =>
  await (
    await axios.get("http://localhost:5000/posts")
  ).data;

function App() {
  const [mails, setMails] = React.useState([]);

  /* 
  function handle() {
    fetchPosts().then((data) => data.map((e) => {}));
  }
  console.log(support.description);*/
  useEffect(() => {
    fetchPosts().then((data) => {
      console.log("==========>", data);
      setMails(data);
    });
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="main-container">
            <Header></Header>
            <div className="middle-container">
              <div className="left-side">
                <TextUi></TextUi>
              </div>

              <div className="right-side">
                <img className="img" src={a}></img>
              </div>
            </div>{" "}
            {mails.map((e, i) => {
              return <h1 key={i}>{e.description}</h1>;
            })}
          </div>
        </Route>
        <Route exact path="/Support">
          <Support></Support>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
