import { useState } from 'react';
import './App.css';
import RestaurantCard from './RestaurantCard';
import Restaurant from './image/restaurant.avif';



function App() {
  const [cardData,setcardData]=useState([
    {
      id:1,
      name:"Lorem ipsum dolor",
      imageUrl:Restaurant,
      rating:4,
      cuisine:"Azerbaycan metbexi"
    }
  ])
  return (
    <div className='container'>
      {
        cardData.map((data)=>(
          <RestaurantCard key={data.id} name={data.name} imageUrl={data.imageUrl} rating={data.rating} cuisine={data.cuisine} />
        ))
      }
    </div>
  );
}

export default App;
