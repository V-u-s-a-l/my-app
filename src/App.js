import { useState } from 'react';
import './App.css';
import RestaurantCard from './RestaurantCard';
import Plov from './image/download.jpg'


function App() {
  const [cardData,setcardData]=useState([
    {
      id:1,
      name:"Plov",
      imageUrl:Plov,
      rating:4,
      cuisine:"Azerbaycan metbexi"
    },
    {
      id:2,
      name:"Bozbas",
      imageUrl:Plov,
      rating:5,
      cuisine:"Azerbaycan metbexi"
    },
    {
      id:3,
      name:"Dolma",
      imageUrl:Plov,
      rating:2.5,
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
