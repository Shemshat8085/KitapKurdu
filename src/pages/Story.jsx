import React from 'react'
import { useOutletContext } from 'react-router-dom'
import Card from '../components/Card';

function Story() {
    const { books } = useOutletContext();

    const story = books.filter((book) => book.category === "Hikaye");
    console.log(story);

    return (
        <div className="container">
        <h2 className='text-center mb-4'>Hikaye kitaplari</h2>
        <div className="fix-card-layout">
        {story.map((book) => (
          <Card key={book.id} book={book} />
        ))}
      </div>
      </div>
    
    );
}

export default Story