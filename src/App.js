import React from 'react';
import Quote from './Quote';
import './app.css';


class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header>
          <h1>Random Quote Generator</h1>
          <p>Inspiration at the click of a button</p>
          </header>
          <Quote />
      </div>
    )
  }
  
}

export default App;
