import React from 'react';
import { IndexLink, Link } from 'react-router';

const styles = {
  container: {
    maxWidth: 800,
    margin: '0 auto'
  },
  nav: {
    borderBottom: '1px solid lightgray'
  },
  link: {
    color: 'tomato',
    display: 'inline-block',
    padding: '1em',
    textDecoration: 'none'
  },
  activeLink: {
    fontWeight: 700
  }
}

function Workspace(props) {
  return (
    <div style={styles.container}>
      <nav style={styles.nav}>
        <IndexLink to="/" style={styles.link} activeStyle={styles.activeLink}>Home</IndexLink>
        <Link to="/comments" style={styles.link} activeStyle={styles.activeLink}>Comment App</Link>
      </nav>
      {props.children}
    </div>
  )
}

export default Workspace;
