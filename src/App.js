import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {AddItem} from "./components/AddItem";
import {ItemList} from "./components/ItemList";
import {GlobalProvider} from "./contexts/GlobalState"

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <Header />
        <AddItem />
        <ItemList />
      </div>
    </GlobalProvider>
    
  );
}

export default App;
