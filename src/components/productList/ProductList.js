import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleProduct from "../singleProduct/SingleProduct";

import api from "../../utils/api";

const Product = () => {
  const [phones, setPhones] = useState([]);
  const [brands, setBrands] = useState([]);
  const page = 1;
  const limit = 100;
  useEffect(() => {
    api.get("http://localhost:8000/phones",{
      params:{
        page,
        limit
    }
    })
      .then((response) => {
        const {phones} = response.data.result;
        console.log('phones',phones);
        setPhones(phones);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);
  
  useEffect(() => {
    api.get("http://localhost:8000/brands")
      .then((response) => {
        const brands = response.data.result;
        console.log('brands',brands);
        setBrands(brands);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });

  }, []);

  return (
    <>
        <div className="container mx-auto pb-20">
        <h2 className="text-center text-3xl py-10 text-black">All Products</h2>
        <div className="flex justify-between gap-10">
          <div className="w-[20%] bg-gray-50 flex flex-col gap-3 px-3 pt-2">
            <h3
              className="select-none cursor-pointer flex justify-between"
              
            >
              <span className="font-semibold">All brands</span>
              <span>{`(${phones?.length})`}</span>
            </h3>
            <div>
              {brands.map((brand) => (
                <div className="flex mb-6 ">
                  <div className="text-2xl" key={brand.id}>
                    <input
                    className=" mr-4 "
                      type="checkbox"
                     
                    />
                    {brand.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-gray-500 pb-4">
              {<Link to="/">Home </Link>}/
            </p>
            <div className="grid grid-cols-5 gap-10 ">
             
                  {phones.map((product) => (
                    <SingleProduct key={product.id} product={product} />
                    ))}
            </div>
          </div>
        </div>
      </div>       
    </>
  );
};

export default Product;
