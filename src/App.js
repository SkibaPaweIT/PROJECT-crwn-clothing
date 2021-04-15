import React from 'react';
import './App.css';
import HomePage from './pagges/homepage/homepage.component';
import {Switch ,Route , withRouter} from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch> {/* It will not render anything else */}
        <Route exact path='/' component={HomePage}/> {/* if we don't use exact it will get every route where it's slash */}
        <Route exact path='/shop/hats' component={HatsPage}/>
      </Switch>
    </div>
    

  );
}

export default App;
