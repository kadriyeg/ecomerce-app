import React from 'react'


const NavbarMenu = () => {
    return (
           <div className='flex items-center gap-6'>
            <div>
                Home
            </div>
            <div>
                About Us
            </div>
            <div>
                Products
            </div>
            <div>
                Testimonal
            </div>
      
        <div className='flex items-end gap-6'>
        <div>
                Contact
            </div>
            <div>
                Buy Online
            </div>
        </div>
        </div>
    )
}

export default NavbarMenu