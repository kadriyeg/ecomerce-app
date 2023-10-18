import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/categorySlice";


const Categories = ({setCategory}) => {
    const dispatch = useDispatch();
    const { categories } = useSelector(state => state.categories);

    console.log(categories, "categories");

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])
    return (
        <div className="">
              <div className="font-extrabold text-5xl mx-10 mt-8">
                Products
            </div>
            <div className="grid grid-cols-10 mx-8 mt-8 p-2">
                {categories?.map((category,i) => (
                    <div onClick={()=> setCategory(category)} className="text-center cursor-pointer hover:bg-gray-300" key={i}>{category}</div>))}
            </div>
        </div>
    )
}

export default Categories