import React from 'react';
import PropType from 'prop-types';

function Food({name,picture,rating}) {
  return (
  <div> 
    <h2>I love {name}</h2>
    <h4>{rating} / 5.0 </h4>
    <img src={picture} alt={name} />
  </div>
  );
}

const foodILike = [
{
  id: 1,
  name: 'Ayaka',
  image: 'https://pbs.twimg.com/media/E3ReemDUYAEehZM.jpg',
  rating: 5,
},
{
  id: 2,
  name: 'Yoimiya',
  image: 'https://pbs.twimg.com/media/E3RZNCjVkAYrgw0.jpg',
  rating: 4.9,
}
];

// function renderFood(dish) {
//   return <Food name={dish.name} picture={dish.picture}/>;
// }

function App() {
  return (
  <div>
    Hello world!!!
    {
    foodILike.map(dish => (
      <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
    ))}
  </div>
  );
}

Food.propType = {
  name: PropType.string.isRequired,
  picture: PropType.string.isRequired,
  rating: PropType.number,
};

export default App;
