import React, { Component } from 'react';
import './header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="header">
        <Link to="/">React Filmes</Link>
      </div>
     );
  }
}
 
export default Header;