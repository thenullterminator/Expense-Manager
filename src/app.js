import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,NavLink,Switch}  from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const Home=()=>(
      <div>Home page</div>
);

const About=()=>(
      <div>About page</div>
);

const Edit =()=>(
      <div>Edit page</div>
);

const Notfound=()=>(
      <div>
            404!-<Link to='/'>GO Home</Link>
      </div>
);

const Header=()=>(
      <div>
            <h1>Expensify</h1>
            <p> <NavLink to='/' exact activeStyle={{color:'red'}}>home</NavLink></p>
            <p> <NavLink to='/about' activeStyle={{color:'red'}}>about</NavLink></p>
           <p> <NavLink to='/edit' activeStyle={{color:'red'}}>edit</NavLink></p>
           
      </div>
);

const setup=(
      <Router>
            <Header/>
            <Switch>
                  <Route path='/' component={Home} exact/>
                  <Route path='/about' component={About}/>
                  <Route path='/edit' component={Edit}/>
                  <Route component={Notfound}/>
            </Switch>
      </Router>
);

ReactDOM.render(setup,document.getElementById('app'));
