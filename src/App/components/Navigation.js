import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Navigation({moon}) {
  return (
    <div className='bg-white flex justify-evenly items-center h-24 shadow-sm'>
        <div>
            <h1 className='font-extrabold text-base'>Where in the World?</h1>
        </div>
        <div>
            <button className='flex justify-between items-center w-24'>

                <a href=''><FontAwesomeIcon className='h-6 font-normal' icon={moon}/></a>
                <span className=''>Dark Mode</span>
            </button>
        </div>
    </div>
  )
}

export default Navigation
