import React, {Componet} from 'react'
import logo from './logo.svg';
import './App.css';

class App extends Componet{
  render() {
    return (
      <div className="gray-background">
        <img src={logo} lat="logo"/>
        <h2>Let's develop managment system!</h2>
      </div>
    );
  }
}



export default App;
