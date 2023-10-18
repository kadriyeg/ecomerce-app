import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailProduct, getProductDetail } from "../redux/productSlice";
import { useParams } from "react-router-dom";
import DetailComp from "../components/detail/DetailComp";



const Detail = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const{ productDetail, productDetailStatus } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(getDetailProduct(id));
    }, [dispatch, id]);


console.log(productDetail, "productDetail");

    return (
        <div>
            {
                productDetailStatus === "loading" ? <div>loading...</div> :  <DetailComp productDetail={productDetail}/>

            }
           

        </div>
    )
}

export default Detail