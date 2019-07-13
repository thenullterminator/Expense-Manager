import React from 'react';
import {NavLink} from 'react-router-dom';
const Header=()=>(
      <div>
            <h1>Expensify</h1>
            <p> <NavLink to='/' exact activeStyle={{color:'red'}}>home</NavLink></p>
            <p> <NavLink to='/create' activeStyle={{color:'red'}}>create</NavLink></p>
            <p> <NavLink to='/help' activeStyle={{color:'red'}}>help</NavLink></p>
      </div>
);

export default Header;