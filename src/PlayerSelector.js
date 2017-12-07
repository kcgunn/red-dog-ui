import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel  } from 'react-bootstrap';
import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



class PlayerSelector extends Component {



  onInputChange() {
  	this.props.onPlayerChange(parseInt(this.playerSelector.value));
  }

  render() {
    return (
      <form>
      	<FormGroup controlId="formControlsSelect">
	      <ControlLabel>Player Select</ControlLabel>
	      <FormControl inputRef={(ref) => {this.playerSelector = ref}} componentClass="select" placeholder="select" onChange={this.onInputChange.bind(this)}>
	        <option value="select">Select Players</option>
	        <option value="2">2</option>
	        <option value="3">3</option>
	        <option value="4">4</option>
	        <option value="5">5</option>
	        <option value="6">6</option>
	        <option value="7">7</option>
	        <option value="8">8</option>
	        <option value="9">9</option>
	        <option value="10">10</option>
	      </FormControl>
	    </FormGroup>
      </form>
    );
  }
}

export default PlayerSelector;