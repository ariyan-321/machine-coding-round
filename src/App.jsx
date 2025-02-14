
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {

  const[products,setProducts]=useState([]);

  useEffect(()=>{
    fetch(`https://dummyjson.com/products`)
    .then(res=>res.json())
    .then(data=>setProducts(data.products))
  },[])


  return (
    <>
    {
      products.map(product=> <div key={product.id}>{product.title}</div>)
    }
    </>
  )
}

export default App
