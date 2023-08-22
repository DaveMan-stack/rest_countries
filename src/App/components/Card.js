import React from 'react'
import testImg from '../../logo.svg'
export default function Card({data, style, country}) {
  console.log(country, 'this is the country obj')
  return (
    <div style={style} className='rounded-lg bg-white shadow-sm pb-5 w-3/4 h-80 sm:w-64 lg:h-72 lg:w-52'>
        <div className='w-full h-36 overflow-hidden border-b'>
            <img className='w-full h-full object-cover' src={country.flags.png} alt="" />
        </div>
        <div className='pl-6'>
            <h2 className='text-lg font-bold my-4'>{country.name.common}</h2>
            <div className=''>
                <h3><span className='font-semibold'>Population:</span>{country.population}</h3>
                <h3><span className='font-semibold'>Region:</span>{country.region}</h3>
                <h3><span className='font-semibold'>Capital:</span>{country.capital[0]}</h3>

            </div>

        </div>
    </div>
  )
}
