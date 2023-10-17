import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";   

const Product = ({ product }) => {
    
    return (
        
        <div className="relative w-200 p-2 m-10 hover:bg-orange-500 flex flex-col items-center justify-center">
            
            <div className="relative z-10 w-150 h-150 overflow-hidden">
                <img
                    src={product?.thumbnail}
                    alt={product.name}
                    className="object-center object-cover"
                    style={{ width: "150px", height: "150px" }}
                />
            </div>
            <div className="absolute inset-3 bg-white opacity-70 "></div>
            <div className="font-bold text-xl z-10">{product?.title}</div>
           <div className="flex flex-row">
           <div className="font-thin text-left z-10">${product?.price}</div>
            <AiOutlineArrowRight className="absolute right-3 bottom-3" />
           </div>
        </div>
    );
}

export default Product;
