import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Epic Tunisian Destinations</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='card__items'>
          <CardItem
              src='images/Camping_Tunisie_Ain_Kanassira_.jpg'
              text='Located in Korbous about 1h30 from the capital Tunis, Ain Kanassira offers a landscape between the sea and the mountains. It is known for its hot spring of 44 ° C and its therapeutic virtues.'
              label='Ain Kanassira'
              path='/services'
            />
           <CardItem
              src='images/Camping_Tunisie_Crique_Robinson.jpg'
              text="Only 1.5 hours from the capital, Robinson's cove is located in a secluded corner in Korbous, it is known for its green mountains and calm beach. The cove is accessible on foot from Ain Atrous or by small boat."
              label='Crique_Robinson'
              path='/services'
            />
                     
            <CardItem
              src='images/capserrat.jpg'
              text='Located in the northwest of Tunisia, Cap Serrat is located between Sejnane and Tabarka and facing the archipelago of La Galite. It is one of the most popular parts of the Bizerte coastline.'
              label='capserrat'
              path='/services'
            />
            <CardItem
              src='images/Camping_Tunisie_Beni_Mtir.jpg'
              text='This village in northwestern Tunisia is located in the mountainous area of ​​Kroumirie just a few kilometers from the town of Aïn Drahem. Beni Mtir gives you an appointment with a marvelous landscape without forgetting the magnificent waterfalls which give an exceptional charm to this village.'
              label='ABeni_Mtir'
              path='/products'
            />
            <CardItem
              src='images/bouhertma.jpg'
              text='If you decide to go camping in Bouhertma, you can go to the “Bouhertma Outdoor” camping center or you can simply set up your tents in the forest. In the morning, you can also go kayaking at the Sidi Bou Hertma dam'
              label='bouhertma'
              path='/sign-up'
            />
             <CardItem
              src='images/Camping_Tunisie_Rtiba.jpg'
              text='Who says Rtiba, says a magnificent forest and a virgin beach. Rtiba also has an exceptional charm and magic. It is known to be a camping spot.'
              label='Rtiba'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
