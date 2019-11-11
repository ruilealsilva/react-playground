import React, { useContext } from "react";
import { FruitContext, VegetableContext } from "./Store";
import Vegetable from "./Vegetable";
import Fruit from "./Fruit";
import "./App.css";

const logo =
  "http://pluspng.com/img-png/random-png-image-mabel-s-sweater-creator-random-gnome-png-gravity-falls-wiki-fandom-powered-by-wikia-510.png";

const App = () => {
  const [fruit] = useContext(FruitContext);
  const [vegetable] = useContext(VegetableContext);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Happy Danylo</p>
        <Fruit />
        <p style={{ color: "red" }}>{fruit}</p>
        <Vegetable />
        <p style={{ color: "green" }}>{vegetable}</p>
      </header>
    </div>
  );
};

export default App;
