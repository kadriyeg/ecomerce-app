import React, { useEffect } from "react";
import { getProducts } from "../../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading";
import Product from "./Product";
import Categories from "./Categories";

const Products = () => {
    const dispatch = useDispatch();
    const { products, productStatus } = useSelector(state => state.products);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return (
        <div>
           
            <div className="font-extrabold text-5xl mx-10 mt-8">
                Products
            </div>
            <Categories />
            {productStatus === "loading" ? (
                <Loading />
            ) : (
                <div className="p-2 m-2">
                    <div className="grid grid-cols-4 ">
                    {products && products.products ? (
                        products.products.map((product, i) => (
                            <Product key={i} product={product} />
                        ))
                    ) : (
                        <p>No products found.</p>
                    )}
                </div>
                </div>
            )}
        </div>
    );
}

export default Products;
