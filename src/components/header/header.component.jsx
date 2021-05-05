import React from 'react';
import './header.styles.scss'

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component'


import {Link} from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'; //higher order component who give us access to things related to redux
import { createStructuredSelector} from 'reselect'
import { selectCartHidden} from '../../redux/cart/cart.selectors'
import { selectCurrentUser} from '../../redux/user/user.selectors';

const Header=({currentUser, hidden})=> (

    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'></Logo>
        </Link>

        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                Content
            </Link>
            {
                currentUser ? (
                <div className='option' onClick={()=> auth.signOut()}>
                SIGN OUT 
                </div>
                ):(
                <Link className='option' to='/signin'>
                SIGN IN
                </Link>
                )
            }
            <CartIcon/>
        </div>
        {hidden ? null : <CartDropdown/>}

    </div>
);

//Structured selector
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

//Version with selectors bud separated
// const mapStateToProps = (state) => ({
//     currentUser: selectCurrentUser(state),
//     hidden: selectCartHidden(state)
// })

//Normal version with redux without selectors
// const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
//     currentUser,
//     hidden
// })

export default connect(mapStateToProps)(Header);