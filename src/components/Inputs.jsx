// import React, { useState,useEffect } from 'react';
// import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons';
// import getCitySuggestions from '../services/SuggestionService';

// function Inputs({units, setUnits, setQuery}) {
//   const[city, setCity] = useState('');
//   const [suggestions, setSuggestions] = useState([]);
 
  
//   useEffect(() => {
//     if (city.length > 2) {
//       getCitySuggestions(city).then(data => setSuggestions(data));
//     } else {
//       setSuggestions([]);
//     }
//   }, [city]);


//   const handleSearchClick = () => {
//     if (city !== '') setQuery({ q: city });
//   };

//   const handleLocationClick = () => {
//     if(navigator.geolocation){
//       navigator.geolocation.getCurrentPosition((position) =>{
//         let lat = position.coords.latitude
//         let lon = position.coords.longitude

//         setQuery({
//           lat,
//           lon,
//         })
//       })
//     }
//   }

//   const handleUnitsChange = (e) => {
//     const selectedUnit = e.currentTarget.name;
//     if(units !== selectedUnit) {setUnits(selectedUnit)};
//   }

//   const handleSuggestionClick = suggestion => {
//     setCity(suggestion);
//     setQuery({ q: suggestion });
//     setSuggestions([]);
//   };  

//   return (
//     <div className='flex flex-row justify-center my-6 relative'>
//         <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
//             <input 
//             value={city}
//             onChange={(e) => setCity(e.currentTarget.value)}
//             type='text' 
//             placeholder='Search for city...'
//             className='text-xl font-light p-2 w-full shadow-xl capitalize focus:outline-none placeholder:lowercase'/> 
//             <UilSearch 
//             size={25} 
//             className='text-white cursor-pointer transition ease-out hover:scale-125'
//             onClick={handleSearchClick}
//             />
//             <UilLocationPoint 
//             size={25} 
//             className='text-white cursor-pointer transition ease-out hover:scale-125'
//             onClick={handleLocationClick}
//             />
//             </div>
            
//             {suggestions.length > 0 && (
//           <ul className='absolute  top-12 w-1/4 bg-white text-black shadow-lg rounded-md z-50'>
//             {suggestions.map((suggestion, index) => (
//               <li
//                 key={index}
//                 className='cursor-pointer p-2 hover:bg-gray-200'
//                 onClick={() => handleSuggestionClick(suggestion)}
//               >
//                 {suggestion}
//               </li>
//             ))}
//           </ul>
//         )}
        
//         <div className='flex flex-row w-1/4 items-center justify-center'>
//         <button name='metric' className='text-xl text-white font-light transition ease-out hover:scale-125' onClick={handleUnitsChange}>°C</button>
//         <p className='text-xl text-white mx-1'>|</p>
//         <button name='imperial' className='text-xl text-white font-light transition ease-out hover:scale-125' onClick={handleUnitsChange}>°F</button>
//         </div>
//     </div>
//   )
// }

// export default Inputs


import React, { useState, useEffect } from 'react';
import { UilSearch, UilLocationPoint } from './UilIcons';
import getCitySuggestions from '../services/SuggestionService';

function Inputs({ units, setUnits, setQuery }) {
    const [city, setCity] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        if (city.length > 2) {
            getCitySuggestions(city).then(data => setSuggestions(data));
        } else {
            setSuggestions([]);
        }
    }, [city]);

    const handleSearchClick = () => {
        if (city !== '') setQuery({ q: city });
    };

    const handleLocationClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;

                setQuery({
                    lat,
                    lon,
                });
            });
        }
    };

    const handleUnitsChange = (e) => {
        const selectedUnit = e.currentTarget.name;
        if (units !== selectedUnit) { setUnits(selectedUnit) };
    };

    const handleSuggestionClick = suggestion => {
        setCity(suggestion);
        setQuery({ q: suggestion });
        setSuggestions([]);
    };

    return (
        <div className='flex flex-row justify-center my-6'>
            <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
                <input
                    value={city}
                    onChange={(e) => setCity(e.currentTarget.value)}
                    type='text'
                    placeholder='Search for city...'
                    className='text-xl font-light p-2 w-full shadow-xl capitalize focus:outline-none placeholder:lowercase'
                />
                <UilSearch
                    size={25}
                    className='text-white cursor-pointer transition ease-out hover:scale-125'
                    onClick={handleSearchClick}
                />
                <UilLocationPoint
                    size={25}
                    className='text-white cursor-pointer transition ease-out hover:scale-125'
                    onClick={handleLocationClick}
                />
                <div>
                    {suggestions.length > 0 && (
                        <ul className='absolute top-12 w-full bg-white text-black shadow-lg'>
                            {suggestions.map((suggestion, index) => (
                                <li
                                    key={index}
                                    className='cursor-pointer p-2 hover:bg-gray-200'
                                    onClick={() => handleSuggestionClick(suggestion)}
                                >
                                    {suggestion}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            <div className='flex flex-row w-1/4 items-center justify-center'>
                <button name='metric' className='text-xl text-white font-light transition ease-out hover:scale-125' onClick={handleUnitsChange}>°C</button>
                <p className='text-xl text-white mx-1'>|</p>
                <button name='imperial' className='text-xl text-white font-light transition ease-out hover:scale-125' onClick={handleUnitsChange}>°F</button>
            </div>
        </div>
    );
}

export default Inputs;
