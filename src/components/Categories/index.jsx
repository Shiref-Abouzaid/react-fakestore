import React, {useState,useEffect} from 'react'

import './index.scss';

export default function Categories({setSelectedCategory, getProducts}) {
    const [categories , setCategories]= useState([])
  

    const getCategories = async () => {
        const response = await fetch('https://fakestoreapi.com/products/categories')
        const data = await response.json()
        setCategories(data)
    }

    useEffect(()=>{
        getCategories();

    },[])

    return (
        <div className="categories">

            {categories.map((category) => (
                <div key={category} className="category-card" onClick={()=>setSelectedCategory(category)}>
  
                    <h6>{category}</h6>
                </div>
            ))}
            <div className="category-card"  onClick={()=>getProducts()}>
                <h6>All</h6>
            </div>
        </div>
    );
}
