import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/categorySlice";

const Categories = () => {
    const dispatch = useDispatch();
    const { categories } = useSelector(state => state.categories);

    console.log(categories, "categories");

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])
    return (
        <div>
            <div className=" mx-10 mt-8">
                Categories
            </div>
        </div>
    )
}

export default Categories