import React, { useState, useEffect } from 'react'; 
import { useParams } from 'react-router-dom'
import api from "../utils/api"
import Information from '../components/Information';


const Details = () => {

  const [book, setBook] = useState(null);

  const {id} = useParams();

 

  useEffect(() => {
    api.get(`/books/${id}`).then((res) => {
      setBook(res.data);
    });
    
  }, [id]);


  

  return (
    <div className='container my-5 mx-auto'>
      <div className='row'>
      <div className='col-md-6 d-flex justify-content-center align-items-center'>
        <img src={book?.image} className='rounded img-fluid shadow' alt={book?.title} />
      </div>

      <div className='col-md-6 d-flex flex-column my-3 justify-content-center align-items-center'>
        <h1 className='text-center text-nowrap'>{book?.title}</h1>

        <div>
          <Information title="Yazar" value={book?.author}/>
          <Information title="Yil" value={book?.year}/>
          <Information title="Sayfa Sayisi" value={book?.page}/>
          <Information title="Fiyat" value={book?.price*10}/>
          <Information title="Aciklama" value={book?.description}/>
        </div>
      </div>
      </div>
    </div>
  )
  }


export default Details