import React from 'react'

const Information = ({title, value}) => {
  return (
    <div>
        <p>
            <span className='badge bg-danger me-3 px-3 w-25 py-2 fw-bold'>{title}:</span>
            <span className='fw-bold'>{value}</span>
        </p>
    </div>
  )
}

export default Information