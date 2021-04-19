import React, { Component } from 'react';

class DisplayNumber extends Component {
  render() {
    return (
      <div>
        <h1>DisplayNumber Number</h1>
        <input type="text" value={this.props.number} readOnly></input>
      </div>
    );
  }
}

export default DisplayNumber;