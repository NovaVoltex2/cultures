import React from 'react'
import CuisineNo from '../images/assets/nsofood.jpg'


const CuisineNso = () => {
  return (
    <>
    <div className='col-2'>
    <p>
	The staple food of the Nso people is corn fufu, eaten with huckleberry, prepared often with very little palm oil and salt.
    </p>
			  <div className="wrapper">
				  <div className='image-container'>
					  <img src={CuisineNo} alt=""/>
				  </div>
			  </div>
    </div>
    </>
  )
}

export default CuisineNso