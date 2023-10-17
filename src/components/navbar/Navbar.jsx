import React from 'react';
import NavbarLogo from './navbaritem/NavbarLogo';
import NavbarMenu from './navbaritem/NavbarMenu';
const Navbar = () => {
    return (
        <div className='flex justify-around bg-green-50'>
           <NavbarLogo />
           <NavbarMenu />
        </div>
    )
}

export default Navbar;
