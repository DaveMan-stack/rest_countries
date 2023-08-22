import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Search({searchIcon}) {
  return (
    <form action="" className='h-12 w-4/5 bg-white shadow-sm flex flex-row justify-center items-center pl-8 box-border rounded-md lg:w-96'>
        <button type='submit' className='pr-6'>
            <FontAwesomeIcon color='hsl(0, 0%, 52%)' icon={searchIcon}/>
        </button>
        <input type="text" className='bg-transparent w-4/5 text-darkGray p-2 focus:outline-none' placeholder='Search for a country...'/>
    </form>
  )
}
