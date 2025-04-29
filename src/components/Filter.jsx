import React from 'react'
import { useSearchParams } from 'react-router-dom';

const Filter = () => {

    const [searchParams, setSearchParams]=useSearchParams()

    const handleSubmit = (e) => {
        e.preventDefault();

        const text = e.target[0].value

        searchParams.set("search", text)

        setSearchParams(searchParams)

    }

    //Select alaninda bi degishim oldugunda chalishacak fonksiyon

    const handleChange = (e) => {
        const value=e.target.value

        searchParams.set('sort', value)

        setSearchParams(searchParams)
    }

  return (
    <div>
        <div className='d-flex justify-content-between mt-4'>
            <select onChange={handleChange} className='form-select w-25' defaultValue="">
                <option value="" disabled>Sirala</option>
                <option value="a-z">a-z</option>
                <option value="z-a">z-a</option>
            </select>

            <form onSubmit={handleSubmit} className='d-flex gap-2 '>
                <input type="search" placeholder='kitap ismi giriniz..' className='form-control'/>
                <button className='btn btn-primary'>Ara</button>
            </form>

           
        </div>
    </div>
  )
}

export default Filter