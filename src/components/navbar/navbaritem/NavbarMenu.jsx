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
        <div className='flex items-center cursor-pointer gap-6'>
            <ul class="flex border-b">
                <li class="-mb-px mr-1">
                    <a class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-orange-500 font-semibold" href="/">Home</a>
                </li>
                <li class="mr-1">
                    <a class="bg-white inline-block py-2 px-4 text-gray-300 hover:text-orange-300 font-semibold" href="/">About Us</a>
                </li>
                <li class="mr-1">
                    <a class="bg-white inline-block py-2 px-4 text-gray-300 hover:text-orange-300 font-semibold" href="/">Products</a>
                </li>
                <li class="mr-1">
                    <a class="bg-white inline-block py-2 px-4 text-gray-300 hover:text-orange-300 font-semibold" href="/">Testimonal</a>
                </li>
                <li class="mr-1">
                    <a class="bg-white inline-block py-2 px-4 text-gray-300 hover:text-orange-300 font-semibold" href="/">Contact</a>
                </li>
                <li class="mr-1">
                    <a class="bg-white inline-block py-2 px-4 text-gray-300 hover:text-orange-300 font-semibold" href="/">Buy Online</a>
                </li>
            </ul>
            
            <div className='flex items-end gap-6'>
                <div onClick={() => navigate("cart")} className='relative'>
                    <div className='absolute -top-2 -right-3 bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center'>{itemCount}</div>
                    <SlBasket size={25} />
                </div>
            </div>
        </div>
    )
}

export default NavbarMenu