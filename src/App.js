import React from 'react';
import './App.css';

import {Switch ,Route, Redirect } from 'react-router-dom';
import { auth, createUserProfileDocument /*, addCollectionAndDocuments*/ } from './firebase/firebase.utils';
import {connect} from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser} from './redux/user/user.selectors'
import { createStructuredSelector} from 'reselect'

import HomePage from './pagges/homepage/homepage.component';
import ShopPage from './pagges/shop/shop.component';
import CheckoutPage from './pagges/checkout/checkout.component';
import SignInAndSignUpPage from './pagges/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
//import { selectCollectionsForPreview } from './redux/shop/shop.selector'



class App extends React.Component {
  unsubscribeFromAuth = null;



  componentDidMount(){
    const {setCurrentUser /*, collectionsArray */ } = this.props;
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth => { //auth is from firebase
        if(userAuth){ //if he signs in then it's ok. we get data and stuff
          const userRef = await createUserProfileDocument(userAuth)

          userRef.onSnapshot(snapShot => {  //it's listener checking if the snapshot changes
              setCurrentUser({
                id: snapShot.id,
                ...snapShot.data()
            });
            //`console.log(this.state); //remember the set state is asynchronous so we need to pass second function as a parameter
          });        
        }
    //userAuth is null so current state is Null so we aren't signed in and stuff
        setCurrentUser(userAuth);
        //addCollectionAndDocuments('collections', collectionsArray.map(({title, items}) => ({title, items}) ))
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
      <Header/>
        <Switch> {/* It will not render anything else */}
          <Route exact path='/' component={HomePage}/> {/* if we don't use exact it will get every route where it's slash */}
          <Route exact path='/checkout' component={CheckoutPage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/signin' 
                render={()=> this.props.currentUser ? (
                  <Redirect to='/' />
                  ):(
                    <SignInAndSignUpPage/> 
                  )}/>
        </Switch>
      </div>
    );
  }
 
}

const mapStateToProps = createStructuredSelector({

    currentUser: selectCurrentUser,
    //collectionsArray: selectCollectionsForPreview
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)) //way for redux to know whatever you pass it will be an action object passed to every reducer
})

export default connect(
  mapStateToProps,
  mapDispatchToProps)(App);
