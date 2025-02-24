import React from 'react'
import ProductCard from '../Components/ProductCard';
import { mockData } from '../assets/mockData';
import { useSelector } from 'react-redux';
const Shop = () => {
  const selectSearch  = useSelector((state)=>state.search.search) 
  return (
    <div className=" mx-auto py-12 px-4 md:px-16 lg:px24">
    <h2 className="text-2xl font-bold mb-6 text-center">Shop</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer" >
      {
        mockData.filter((items)=>{
          return items.name.toLowerCase().includes(selectSearch.toLowerCase());
        })
        .map((product,index)=>(
          <div key={index}>
         <ProductCard product={product} />
          </div>
        ))
      }
    </div>
  </div>
  )
}

export default Shop