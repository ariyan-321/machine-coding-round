
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {

  const[products,setProducts]=useState([]);

  const pageSize=10;

  useEffect(()=>{
    fetch(`https://dummyjson.com/products?limit=100`)
    .then(res=>res.json())
    .then(data=>setProducts(data.products))
  },[]);




  return (
    <>
    {
      products.map(product=> <div className='card' key={product.id}>
      <img  src={product.thumbnail} alt="" />
      <h1>{product.title}</h1>
      </div>)
    }
    </>
  )
}

export default App
