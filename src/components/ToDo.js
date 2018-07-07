//import React and React's Component class
import React, { Component } from 'react';

//Define a class that extends component
class ToDo extends Component {


//Define a render() method on your class, this method is REQUIRED
  render() {
    return (
      <li>
      <input type="checkbox" checked={ this.props.isCompleted } />
      <span>{ this.props.description }</span>
      </li>
    );
  }
}

export default ToDo;


