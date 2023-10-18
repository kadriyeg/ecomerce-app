import React, { useEffect } from "react";
import { getCategoryProducts, getProducts } from "../../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading";
import Product from "./Product";
import Categories from "./Categories";


const Products = ({category}) => {
    const dispatch = useDispatch();
    const { products, productStatus } = useSelector((state) => state.products);


    useEffect(() => {
        if(category) dispatch(getCategoryProducts(category));
        else
        dispatch(getProducts());
    }, [dispatch, category]);

    const displayedProducts = products && products.products ? products.products.slice(0, 8) : [];

    return (
        <div>
            {productStatus === "loading" ? (
                <Loading />
            ) : (
                <div className="grid grid-cols-4 gap-4 p-4">
                    {displayedProducts.map((product, i) => (
                        <Product key={i} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Products;
