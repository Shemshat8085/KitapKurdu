import React from 'react'
import { useOutletContext } from 'react-router-dom'
import Card from '../components/Card';

const Noval = () => {
    const {books} = useOutletContext()

    const noval = books.filter((book) => book.category === "Roman");
    console.log(noval)


  return (
    // <div>
    //     <h2 className='text-center mb-4'>Roman kitaplari</h2>

    //    <div className='row row-cols-1 row-cols-sm-2 row-cols-md-2 g-4'> 
    //    {noval.map((book)=>(
    //     <div className='my-3'>
    //         <Card key={book.id} book={book}/>
    //     </div>
        
    //     ))}
    //     </div>
    // </div>
<div className="container">
  <h2 className='text-center mb-4'>Roman kitaplari</h2>
  <div className="fix-card-layout">
  {noval.map((book) => (
    <Card key={book.id} book={book} />
  ))}
</div>
</div>




  )
}

export default Noval