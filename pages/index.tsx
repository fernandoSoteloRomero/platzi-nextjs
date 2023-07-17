import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'

const HomePage = () => {
  const [productList, setproductList] = useState<TProduct[]>([]);

  useEffect(() => {
    fetch('/api/avo').then(response => response.json()).then(({data,length})=>{
      setproductList(data)
    })
  }, []);

  return (
    <div>
      <Navbar />
      <div>Platzi and Next.js!</div>
      {productList.map(producto =>(
        <div key={producto.id}>{producto.image}</div>
      ))}
    </div>
  )
}

export default HomePage
