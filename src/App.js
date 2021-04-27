import React from 'react';
import './App.css';
import HomePage from './pagges/homepage/homepage.component';
import {Switch ,Route } from 'react-router-dom';


import ShopPage from './pagges/shop/shop.component';
import SignInAndSignUpPage from './pagges/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();

    this.state={
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth => {
        if(userAuth){ //if he signs in then it's ok. we get data and stuff
          const userRef = await createUserProfileDocument(userAuth)

          userRef.onSnapshot(snapShot => { 
            this.setState({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            });
            //`console.log(this.state); //remember the set state is asynchronous so we need to pass second function as a parameter
          });
          
        }
        else{ //userAuth is null so current state is Null so we aren't signed in and stuff
          this.setState({currentUser: userAuth})
        }

    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
      <Header currentUser={this.state.currentUser} />
        <Switch> {/* It will not render anything else */}
          <Route exact path='/' component={HomePage}/> {/* if we don't use exact it will get every route where it's slash */}
          <Route exact path='/shop' component={ShopPage}/>
          <Route exact path='/signin' component={SignInAndSignUpPage}/>
        </Switch>
      </div>
    );
  }
 
}

export default App;
