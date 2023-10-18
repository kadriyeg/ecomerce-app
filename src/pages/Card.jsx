import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../redux/cardSlice";
import { useNavigate } from "react-router-dom";
import CartComp from "../components/card/CartComp";

const Card = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { carts, totalAmount, itemCount } = useSelector(state => state.carts);

    console.log(carts,totalAmount, itemCount, "carts");

    useEffect(() => {
        dispatch(getCartTotal())
    }
        , [dispatch])
    return (
        <div>
           <div className="mx-9 text-2xl font-bold text-orange-500">Your Card</div>
            {
                carts?.length > 0 ? <div>
                    {
                        carts?.map((cart, i) => (
                            <CartComp key={i} cart={cart} /> ))
                    }
                
                    <div className="flex items-center justify-end mr-10 font-bold">Total Amount:  <span>${totalAmount}</span></div>
                </div> :
                <div>Your card is empty</div>
            }
        </div>
    )

}

export default Card