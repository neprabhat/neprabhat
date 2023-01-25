import React from 'react';
import './App.css';
import Game from './components/Game'

class App extends React.Component {
  render(className="square") {
    return(
      <Game/>
    )
  }
}


export default App;