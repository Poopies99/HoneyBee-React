import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from './Firebase';

function Header() {
    const [{ quantity, user }] = useStateValue();
    const navigate = useNavigate();

    console.log(quantity);
    
    const handleAuthentication = ()=> {
        if (user) {
            auth.signOut();
        }
    };

    const redirectOrders = () => {
        navigate("/orders");
    };

    return (
        <div className='header'>
            <Link to="/">
                <img className='header__logo'
                    src="/images/logo.png"
                    alt=""
                />
            </Link>

            <div className='header__search'>
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon"/>
            </div>

            <div className='header__nav'>
                <Link to={!user && '/login'} className='header__link'>
                    <div onClick={handleAuthentication} className='header__option'>
                        <span className='header__optionLineOne'>
                            Hello {user ? user.email : 'Guest'}
                        </span>

                        <span className='header__optionLineTwo'>
                            {user ? 'Sign out' : 'Sign in'}
                        </span>
                    </div>
                </Link>

                <div onClick={redirectOrders} className='header__option'>
                    <span className='header__optionLineOne'>
                        Returns
                    </span>
                        
                    <span className='header__optionLineTwo'>
                        & Orders
                    </span>       
                </div>  
                
                <Link to='/checkout' className='header__link'>
                    <div className='header__basket'>
                        <ShoppingBasketIcon />
                        <span className='header__basketCounter'>{quantity}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
