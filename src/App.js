import React from 'react';
import './App.css';
import HomePage from './pagges/homepage/homepage.component';
import {Switch ,Route } from 'react-router-dom';
import ShopPage from './pagges/shop/shop.component';

function App() {
  return (
    <div>
      <Switch> {/* It will not render anything else */}
        <Route exact path='/' component={HomePage}/> {/* if we don't use exact it will get every route where it's slash */}
        <Route exact path='/shop' component={ShopPage}/>
      </Switch>
    </div>
    

  );
}

export default App;
