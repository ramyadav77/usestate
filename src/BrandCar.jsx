import React, { useState } from 'react'

function BrandCar() {

    const[car,setCar]=useState({
        brand:"ford",
        model:"mustang",
        year:"1964",
        color:"red"
    });
  return (
    <>
    <h1>my {car.brand}</h1>
    <p> it is a {car.color}    {car.model} from {car.year}</p>

    
    
    
    </>
  );
}

export default BrandCar;