import React from 'react'
import { iconUrlFromCode } from '../services/WeatherService'
// import formatForecastWeather from '../services/WeatherService'

function Forecast({title, items}) {
  return (
    <div>
      <div className='flex items-center justify-start mt-6'>
        <p className='text-white font-medium uppercase'>{title}</p>
      </div>
      <hr className='my-2'/>
      <div className='flex flex-wrap items-center justify-between text-white'>
        {items.map((item, index)=>(
            <div key={index} className='flex flex-col items-center justify-center m-2 lg:m-2 md:m-4'>
                <p className='font-light text-sm'>{item.title}</p>
                <img
                src={iconUrlFromCode(item.icon)}
                className='w-12 my-1'
                alt=""/>
                <p className='font-medium'>{`${item.temp.toFixed()}°`}</p>
            </div>
        ))}
      </div>
    </div>
    
  )
}

export default Forecast