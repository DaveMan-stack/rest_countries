import React, {useState, useEffect} from 'react';
import './App.css';
import MobileScreen from './screens/MobileScreen';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-regular-svg-icons'
import Navigation from "./components/Navigation";
import Search from './components/Search';
import Filter from './components/Filter';
import Card from './components/Card'

function App() {
  const url = 'https://restcountries.com/v3.1/all'
  let [countries, setCountries] = useState([]);
  let [loading, setLoading] = useState(true);


  const getCountries = (api) => {
    fetch(api)
    .then(res => res.json())
    .then(data => setCountries(data))
    
    setLoading(false)
  }

  useEffect(() => {
    getCountries(url);
  }, [])

  return (
    <div className='bg-veryLightGray font-primary text-sm'>
      {/* mobile */}
      <div>
      <header className='text-sm'>
            <Navigation moon={faMoon}/>
        </header>
        <main class='container mx-auto flex flex-col justify-center mt-8 px-6'>
          <div className='flex flex-col items-center justify-center gap-10 lg:flex-row lg:justify-between'>
            <Search searchIcon={faSearch}/>
            <div className='flex flex-col w-4/5 lg:w-auto'>
              <Filter style={{alignSelf: 'flex-start'}} countries={{}}/>
            </div>
          </div>

          {/* countries card */}
          <article className="my-10 flex flex-wrap justify-center items-center gap-8 gap-y-14 lg:grid lg:grid-cols-4">
            {
              
              loading == false ? console.log('true') : <h1>Loading...</h1>
            }
          </article>
        </main>

      </div>
      {/* desktop */}
    </div>
  );
}

export default App;
