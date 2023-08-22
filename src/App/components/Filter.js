import React from 'react'

export default function Filter({countries, style}) {
  return (
    
    <select style={style} name="country" id="country" className='h-12 w-48 pl-6 pr-4 py-2 box-border rounded-md shadow-sm focus:outline-none'>
        <option value="___" selected>Filter by Region</option>
        <option value="America">America</option>
    </select>
    
  )
}
