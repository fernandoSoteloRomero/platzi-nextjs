import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const ProductPage = () => {
  const [productWithId, setproductWithId] = useState<TProduct>();

  const { query } = useRouter()
  useEffect(() => {
    const fetchData = async ()=>{
      try{
        const response = await fetch(`/api/avo/${query.id}`)
        const data = await response.json()
        setproductWithId(data)
      }
      catch(error){
        console.log(error)
      }
    }
    fetchData()
  }, [query.id]);

  return (
    <section>
      <h1>Página producto: {query.id}</h1>
      <h2> {productWithId?.name} </h2>
    </section>
  )
}

export default ProductPage
