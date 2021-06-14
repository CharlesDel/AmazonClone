import React, { useContext } from 'react';
import { Menu, Container, Button, Dropdown, Image } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import { NavLink, Link } from 'react-router-dom';
import { RootStoreContext } from '../../app/stores/rootStore';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"

/**/
import "./NavBar.css";

import LoginForm from '../user/LoginForm';
import RegisterForm from '../user/RegisterForm';
/**/


const NavBar: React.FC = () => {
  const rootStore = useContext(RootStoreContext);
  const { user, logout } = rootStore.userStore;
  const {openModal} = rootStore.modalStore;

  const login = () => {
    if (user) {
        /*auth.signOut();*/
    }
}

  return (
    <nav className="header">
        <Container>


                <nav className="header">
                <Link to="/">
                    <img
                        className="header__logo"
                        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                        alt=""
                        />
                </Link>
                <div className="header__search">
                    <input type="text" className="header__searchInput" />
                    <SearchIcon className="header__searchIcon" />
                </div>
                <>
                {
                  user && 
                  (
                      <div className="header__nav">
                          <>
                          <div className="header__link">
                            <div onClick={login} className="header__option">
                                <span className="header__optionLineOne">Hello {user.displayName}</span>
                            </div>
                          </div>
                          <div className="header__link">
                            <div onClick={logout} className="header__option">
                                <span className="header__optionLineOne">Sign out</span>
                            </div>
                          </div>
                          </>
                          <Link to="/" className="header__link">
                              <div className="header__option">
                                  <span className="header__optionLineOne">Returns</span>
                                  <span className="header__optionLineTwo">& Orders</span>
                              </div>
                          </Link>
                          <Link to="/" className="header__link">
                              <div className="header__option">
                                  <span className="header__optionLineOne">Your </span>
                                  <span className="header__optionLineTwo">Prime</span>
                              </div>
                          </Link>
                          <Link to="/checkout" className="header__link">
                              <div className="header__optionBasket">
                                  <ShoppingBasketIcon></ShoppingBasketIcon>
                                  <span className="header__optionLineTwo header__basketCount">{user.displayName}</span>
                              </div>
                          </Link>

                      </div>
                    )
        
                  }
                  { !user &&
                  (
                    <div className="header__nav">
                      <>
                        <div className="header__link">
                          <div onClick={logout} className="header__option">
                              <span className="header__optionLineOne">Sign out</span>
                          </div>
                        </div>
                        <div className="header__link">
                            <div onClick={() => openModal(<LoginForm />)} className="header__option">
                                <span className="header__optionLineTwo">Sign in</span>
                            </div>
                        </div>
                        <div className="header__link">
                            <div onClick={() => openModal(<RegisterForm />)} className="header__option">
                                <span className="header__optionLineTwo">Sign up</span>
                            </div>
                        </div>
                      </>
                    </div>

                  )}
                </>
            </nav>

        </Container>
    </nav>
  );
};

export default observer(NavBar);
