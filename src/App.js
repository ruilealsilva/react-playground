import React from "react";
import "./App.css";

const logo =
  "http://pluspng.com/img-png/random-png-image-mabel-s-sweater-creator-random-gnome-png-gravity-falls-wiki-fandom-powered-by-wikia-510.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Happy Danylo</p>
      </header>
    </div>
  );
}

export default App;
