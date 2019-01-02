import React from 'react';
import { Link } from 'react-router';
import BackButton from './BackButton.js';

const Layout = (props) => {
  return(
    <div className="layout">
      <BackButton />
      <Link to='/'> HOME </Link>
      <br />

      <h1 className="page-title"> Bars App</h1>

      { props.children }
      
    </div>
  )
}

export default Layout;
