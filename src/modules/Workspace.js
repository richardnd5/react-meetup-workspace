import React from 'react';
import { Link, IndexLink } from 'react-router';

class Workspace extends React.Component{

  render() {
    return (
      <div>
        <nav>
          <IndexLink to="/">Home</IndexLink>{' '}
          <Link to="/solfege">Solfege Beginnings</Link>

        </nav>
        {this.props.children}
      </div>
    )
  }

}

export default Workspace;
