import React, { Component } from 'react';
import '../style/Arrows.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";

class Arrows extends Component {
  render() {
    return (
      <div className="Arrows">
        <Link to={`/${(id-1)<0?(this.props.posts.length-1):(id-1)}`}>
          <FontAwesomeIcon icon="chevron-left" />
        </Link>
        <Link to={`/${(id+1)%this.props.posts.length}`}>
          <FontAwesomeIcon icon="chevron-right" />
        </Link>
      </div>
    );
  }
}

export default Arrows;