import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProductsComponet from "../components/ProductsComponent";
import { setProducts } from "../redux/actions/ProductsActions";

const Products = () => {

    const dispatch = useDispatch()

    const getAllProducts = async() =>{
        const response = await fetch("https://rauls-hardware-store.herokuapp.com/ferreteriaRaul/productos");
        const secondResponse = await response.json();
        console.log(secondResponse);
        dispatch(setProducts(secondResponse))
    }

    useEffect(() =>{
        getAllProducts()
    },[])

    return ( 
        <div>
            <h1>
                Productos
            </h1>
            <ProductsComponet />
        </div>
    );
}

export default Products;