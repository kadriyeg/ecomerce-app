import React from 'react';
import NavbarLogo from './navbaritem/NavbarLogo';
import NavbarMenu from './navbaritem/NavbarMenu';
const Navbar = () => {
    return (
        <div className='flex justify-around mt-5'>
           <NavbarLogo />
           <NavbarMenu />
        </div>
    )
}

export default Navbar;
