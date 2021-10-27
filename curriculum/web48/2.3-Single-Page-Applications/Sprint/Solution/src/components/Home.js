import React from 'react'
import { useHistory } from 'react-router-dom';

export default function Home() {
  
  const history = useHistory();  // history = []
  const routeToOrder = () => {
    history.push("/pizza");
  }

  return (
    <div className='home-wrapper'>
      <img className='home-image' src='https://source.unsplash.com/F6-U5fGAOik'  alt='Lambda Eat'  />
      {/* <img className='home-image' src='../img/LambdaS.jpg'  alt=''  /> */}
      <button id='order-pizza' onClick={routeToOrder} className='md-button shop-button' >Order Pizza!</button>

    </div>
  )
}