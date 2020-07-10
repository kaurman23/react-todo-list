import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {AddItem} from "./components/AddItem";
import {ItemList} from "./components/ItemList";


function App() {
  return (
    <div className="container">
     <Header />
     <AddItem />
     <ItemList />
    </div>
  );
}

export default App;
