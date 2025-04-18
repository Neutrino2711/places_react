import React, { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../UIElements/Backdrop';
import './MainNavigation.css';


const MainNavigation = props => {

    const [drawerIsOpen, setdrawerIsOpen] = useState(false);

    const openDrawer = () => {
        setdrawerIsOpen(true);
    }

    const closeDrawer = () => {
        setdrawerIsOpen(false);
    }

    return (<React.Fragment>
        {drawerIsOpen && <Backdrop onClick={closeDrawer} />
        }
        <SideDrawer show={drawerIsOpen} onClick={closeDrawer}>
            <nav className='main-navigation__drawer-nav'>
                <NavLinks />
            </nav>
        </SideDrawer>
        <MainHeader>
            <button className='main-navigation__menu-btn' onClick={openDrawer}>
                <span />
                <span />
                <span />
            </button>
            <h1 className='main-navigation__title'>
                <Link to="/">YourPlaces</Link>
            </h1>
            <nav className='main-navigation__header-nav'>
                <NavLinks />
            </nav>
        </MainHeader>
    </React.Fragment>);
}

export default MainNavigation;