import React, { Component } from 'react';
import Spinner from 'react-loading';
import './loading.css';

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="loading">
        <Spinner className="spinner" type={"bars"} color="#7159c1" />
      </div>
    );
  }
}

export default Loading;