import React from 'react';
import './App.css';
import StarWars from "./Components/StarWars";
import Item from './Components/MyItem';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Item name="James"/>
        <br/>
        <StarWars/>
      </header>
    </div>
  );
}

export default App;
