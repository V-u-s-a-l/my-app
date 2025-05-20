import { useState } from 'react';
import './App.css';
import RestaurantCard from './RestaurantCard';
import Restaurant from './image/restaurant.avif';
import Restaurant2 from './image/restaurant2.avif';
import Restaurant3 from './image/restaurant3.avif';



function App() {
  const [cardData,setcardData]=useState([
    {
      id:1,
      name:"Lorem ipsum dolor",
      imageUrl:Restaurant,
      rating:4,
      cuisine:"Azerbaycan metbexi"
    },
     {
      id:2,
      name:"Lorem ipsum dolor",
      imageUrl:Restaurant2,
      rating:3.5,
      cuisine:"Turk metbexi"
    },
     {
      id:3,
      name:"Lorem ipsum dolor",
      imageUrl:Restaurant3,
      rating:4.5,
      cuisine:"Rus metbexi"
    },
    {
      id:4,
      name:"Lorem ipsum dolor",
      imageUrl:Restaurant,
      rating:3,
      cuisine:"Azerbaycan metbexi"
    },
     {
      id:5,
      name:"Lorem ipsum dolor",
      imageUrl:Restaurant2,
      rating:2.5,
      cuisine:"Turk metbexi"
    },
     {
      id:6,
      name:"Lorem ipsum dolor",
      imageUrl:Restaurant3,
      rating:5,
      cuisine:"Rus metbexi"
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
