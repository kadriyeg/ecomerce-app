import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";   
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
    
const navigate = useNavigate();

    return (        
        <div onClick={()=> {navigate(`products/${product?.id}`)}} className="cursor-pointer relative w-200 p-2 m-10 hover:bg-orange-500 flex flex-col items-center justify-center">
            
            <div className="relative z-10 w-150 h-150 overflow-hidden">
                <img
                    src={product?.thumbnail}
                    alt={product.name}
                    className="mb-5 object-center object-cover"
                    style={{ width: "150px", height: "150px" }}
                />
            </div>
            <div className="absolute inset-3 mt-6 bg-orange-200 opacity-70 "></div>
            <div className="font-bold text-center z-10">{product?.title}</div>
           <div className="flex flex-row">
           <div className="font-thin text-left mb-2 z-10">${product?.price}</div>
            <AiOutlineArrowRight className="absolute right-5 bottom-4 " />
           </div>
        </div>
    );
}

export default Product;
