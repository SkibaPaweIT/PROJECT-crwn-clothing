import React from 'react';
import './header.styles.scss'

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component'


import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'; //higher order component who give us access to things related to redux
import { createStructuredSelector} from 'reselect'
import { selectCartHidden} from '../../redux/cart/cart.selectors'
import { selectCurrentUser} from '../../redux/user/user.selectors';

import { HeaderContainer,LogoContainer, OptionsContainer , OptionLink } from './header.styles'

const Header=({currentUser, hidden})=> (

    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo'></Logo>
        </LogoContainer>

        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/shop'>
                CONTACT
            </OptionLink>
            {
                currentUser ? (
                <OptionLink as='div' onClick={()=> auth.signOut()}>
                SIGN OUT 
                </OptionLink>
                ):(
                <OptionLink to='/signin'>
                SIGN IN
                </OptionLink>
                )
            }
            <CartIcon/>
        </OptionsContainer>
        {hidden ? null : <CartDropdown/>}

    </HeaderContainer>
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