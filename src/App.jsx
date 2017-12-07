import React, { Component } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import logo from './logo.svg';
import Header from './Header.jsx';
import NewGameModal from './NewGameModal.js';
import Players from './Players.js';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      playerCount: 2,
      showNewGameModal: true
    };
  }

  onPlayerCountChange(count) {
    this.setState({
      playerCount: count
    });
  }

  onNewGameModalClose() {
    this.setState({
      showNewGameModal: false
    });
  }

  onNewGameModalButtonClick() {
    this.setState({
      showNewGameModal: true
    });
  }


  render() {
    return (
        <div className="App">

        <NewGameModal 
          onPlayerCountChange={this.onPlayerCountChange.bind(this)} 
          showModal={this.state.showNewGameModal}
          onModalClose={this.onNewGameModalClose.bind(this)}
          />
        <Header />
        <Button onClick={this.onNewGameModalButtonClick.bind(this)}>New Game</Button>
        <Players playerCount={this.state.playerCount} />
      </div>
    );
  }
};

export default App
