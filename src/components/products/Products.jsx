import React, { useEffect } from "react";
import { getProducts } from "../../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading";
import Product from "./Product";
import Categories from "./Categories";

const Products = () => {
    const dispatch = useDispatch();
    const { products, productStatus } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    // Limit the number of products to 8
    const displayedProducts = products && products.products ? products.products.slice(0, 8) : [];

    return (
        <div>
            <div className="font-extrabold text-5xl mx-10 mt-8">
                Products
            </div>
            <Categories />
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
