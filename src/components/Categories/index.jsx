import React, {useState,useEffect} from 'react'
import './index.scss'
export default function Categories() {
    const [categories , setCategories]= useState([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/categories')
        .then(res=>res.json())
        .then(data=>setCategories(data))
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
