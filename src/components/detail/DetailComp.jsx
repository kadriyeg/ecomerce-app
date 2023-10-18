import React from "react";
import { useState } from "react";
import { addToCart } from "../../redux/cardSlice";
import { useDispatch } from "react-redux";

const DetailComp = ({productDetail}) => {

    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(0);


    const increment = () => {
        if (quantity < productDetail.stock)
        setQuantity(quantity + 1);
    };

    const decrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    }

    const addCart = () => {
        dispatch(addToCart({id: productDetail.id, title: productDetail.title, image: productDetail.thumbnail, 
             price: productDetail.price, description: productDetail.description, quantity: quantity}));
    }

    return (
    <div className="flex gap-10 my-10 ml-5 w-10/12">
        <img className="w-max h-max object-cover rounded-xl" src={productDetail?.thumbnail} alt="" />
        <div>
        <div className="text-3xl">{productDetail?.title}</div>
        <div className="text-gray-500 mt-5 mb-5">{productDetail?.description}</div>
        <div className="mb-3">Rating:{productDetail?.rating}/5</div>
        <div className="mb-3">Stock: {productDetail.stock}</div>
        <div className="text-2xl font-bold">${productDetail?.price}</div>
        <div className="flex gap-2">
            <div onClick={decrement} className="text-3xl cursor-pointer">-</div>
            <input className= "w-10 text-center text-3xl" type= "text" value={quantity}/>
            <div onClick={increment} className=" mt-1 text-3xl cursor-pointer">+</div>
        </div>
    <div onClick={addCart} className="border w-[200px] my-2 bg-orange-300 cursor-pointer hover:bg-orange-500 rounded-lg h-10 flex items-center justify-center">Add to cart</div>
        </div>

        
    </div>);
    }

export default DetailComp; 