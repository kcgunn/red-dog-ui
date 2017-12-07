import React, { Component } from 'react';
import { Label } from 'react-bootstrap';
import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



class Players extends Component {


  render() {

  	let boxes = "";

  	for(let i = 1; i <= this.props.playerCount; i++)
  	{
  		let string = 'Player ' + i + ' ';
  		boxes += string;
  	}

    return (
      <div className="Players">
      	<h1>{boxes}</h1>
      </div>
    );
  }
}

export default Players;