import React from 'react';
import { Link, IndexLink } from 'react-router';

function Workspace(props) {
  return (
    <div>
      <nav>
        <IndexLink to="/">Home</IndexLink>{' '}
        <Link to="/solfege">Solfege Beginnings</Link>

      </nav>
      {props.children}
    </div>
  )
}

export default Workspace;
