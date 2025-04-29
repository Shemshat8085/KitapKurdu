import React, { useEffect, useState } from 'react'
import api from "../utils/api";
import Card from "../components/Card"
import Filter from '../components/Filter';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Products = () => {
  const navigate=useNavigate()
  const [books, setState] = useState([]);

  const [searchParams]= useSearchParams()

  const params = {
    q: searchParams.get("search"),
    _sort: "title",
    _order: searchParams.get("sort") === "z-a" ? "desc" : "asc",

  }

  
  

  useEffect(()=>{
    api.get('/books', {params}).then((res)=>{
      if(res.data.length === 0){
        navigate("/TestError");
      }
      
      setState(res.data)})
  },[searchParams])


  
  return (
    <div className='container mt-5'>
      

      <Filter/>

    <div className="books-container">
    {books.map((book)=> (
        <Card book={book} key={book.id}/>
      ))}
    </div>
    </div>
  )
}

export default Products