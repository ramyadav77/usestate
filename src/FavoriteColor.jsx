import { useState } from 'react'
import Car from './Car'
import BrandCar from './BrandCar';

function FavoriteColor() {
  const [color, setColor] = useState("red")

  return (
    <>
      <h1>my favourite color is {color}!</h1>
       <button 

       className=' bg-red-400 text-lg rounded-md p-2 hover:bg-red-200'
       type="button" onClick={()=>setColor("blue")}>blue</button>
    
    <br />
    <hr />
    <h1 className='bg-green-700 text-green-700'>hello </h1>
    <hr />
    <Car/>
    <h1 className='bg-red-700 text-red-700'>hello </h1>
     <a href="https://google.com">google</a>
     <br />
     <BrandCar/>
    </>
  );
}

export default FavoriteColor
