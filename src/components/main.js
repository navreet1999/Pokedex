import React, { useState } from "react";
import { HashRouter as Router, Route, Switch, NavLink } from "react-router-dom";

import "../app-css/main.css";
import Home from "./home.js";
import List from "./list.js";
import logo from "../images/pokemon-23-logo-png-transparent.png";
import Loading from "./loading.js";

const Main = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [pokemonName, setPokemonName] = useState("");

  return (
    <Router>
      <header>
        <NavLink to="/">
          <img className="title" alt="Pokedex" src={logo}></img>
        </NavLink>

        <div className="search-bar">
          <input
            className="search-input"
            type="search"
            placeholder="Search Pokemon"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          ></input>
          <NavLink to={`/pokemon/${searchTerm.toLowerCase()}`}>
            <button
              className="search-button"
              type="button"
              onClick={() => setPokemonName(searchTerm.toLowerCase())}
            >
              Search
            </button>
          </NavLink>
        </div>
      </header>

      <Switch>
        <Route path="/" exact>
          <List />
        </Route>

        <Route path="/pokemon/:name" exact>
          <Home />
        </Route>
      </Switch>
      <div
        className={`overlay ${displayModal ? "show" : ""}`}
        onClick={() => setDisplayModal(false)}
      ></div>
      <footer>
        <div className="navigation">
          <span>
            <NavLink className="navigation-link" to="/">
              List{" "}
            </NavLink>
          </span>
        </div>
      </footer>
    </Router>
  );
};

export default Main;
