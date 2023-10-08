import React, {useState,useEffect} from 'react'
import './index.scss';

export default function Categories() {
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
                <div key={category.id} className="category-card">
  
                    <h3>{category}</h3>
                </div>
            ))}
        </div>
    );
}
