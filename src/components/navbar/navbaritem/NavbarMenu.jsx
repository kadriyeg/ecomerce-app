import React, { useEffect } from 'react'
import { SlBasket } from 'react-icons/sl'
import { useDispatch } from 'react-redux'
import { getCartTotal } from '../../../redux/cardSlice';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Card from '../../../pages/Card';

const NavbarMenu = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { carts } = useSelector(state => state.carts);
    const { itemCount } = useSelector(state => state.carts);

    console.log(carts, "carts");
    useEffect(() => {
        dispatch(getCartTotal())
    }
        , [dispatch])

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
                <div onClick={()=> navigate("cart")} className='relative'>
                    <div className='absolute -top-2 -right-3 bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center'>{itemCount}</div>
                    <SlBasket size={25} />
                </div>
            </div>
        </div>
    )
}

export default NavbarMenu