import React from 'react';
import { Link, IndexLink } from 'react-router';

function Workspace(props) {
  return (
    <div>
      <nav>
        <IndexLink to="/">Home</IndexLink>{' '}
        <Link to="/counter">Counter</Link>{' '}
        <Link to="/circleCentral">Circles!</Link>{' '}
      </nav>
      {props.children}
    </div>
  )
}

export default Workspace;
