import React from 'react';
import './App.css';
import HomePage from './pagges/homepage/homepage.component';
import {Switch ,Route } from 'react-router-dom';


import ShopPage from './pagges/shop/shop.component';
import SignInAndSignUpPage from './pagges/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component'

function App() {
  return (
    <div>
    <Header />
      <Switch> {/* It will not render anything else */}
        <Route exact path='/' component={HomePage}/> {/* if we don't use exact it will get every route where it's slash */}
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/signin' component={SignInAndSignUpPage}/>
      </Switch>
    </div>
  );
}

export default App;
