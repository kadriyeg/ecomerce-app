import React from "react";
import { removeFromCart } from "../../redux/cardSlice";
import { useDispatch } from "react-redux"; 

const CartComp = ({cart}) => {
    const dispatch = useDispatch();
    return (
        <div className="mx-10 flex items-center justify-between">
        <div className="my-2 text-gray-500">
            <img className="w-[150px] h-[150px]" src={cart?.image} alt="cart thumbnail"/>
              </div>
              <div className="w-[400px]">{cart.title}</div>

              <div className="mb-3 w-[200px]">${cart.price} ({cart.quantity}) Pcs</div>
              <div onClick={()=> dispatch(removeFromCart(cart?.id))} className="bg-red-500 text-white w-[100px] h-16 flex items-center justify-center mb-3 cursor-pointer">Delete</div>
              </div>
    )
    

    }

export default CartComp;
