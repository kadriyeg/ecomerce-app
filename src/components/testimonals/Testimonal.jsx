import React from "react";
import like from "../../assets/like.jpg";
import { BiFontSize, BiSolidQuoteLeft } from "react-icons/bi";

const Testimonal = ({ testimonal }) => {
    return (
        <div className="bg-blue-950 h-[500px]">
        <div className="text-5xl font-extrabold text-white pt-10 pl-10">What do customers say...</div>
        <div className= "grid grid-cols-3"> 
            <img src={like} alt="like" className="w-[200px] ml-10 mt-10 rounded-3xl" />
          <div className="grid grid-rows">
          <BiSolidQuoteLeft size={45} style={{ color: 'orange'}} className="color mt-20"/>
          <div className="text-2xl font-bold text-white">Amazing service</div>
          <div className="font-thin text-white">Since the online marketplace can be a scary place, the presence of customer reviews on an online store helps establish authenticity, confidence, and trust among shoppers.</div>
          <div className="font-bold text-orange-500">Wade Warren</div>
            <div className="font-thin text-xs text-gray-300">Doctor</div>
          </div>
        </div>

        </div>
    );
}

export default Testimonal;