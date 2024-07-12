import React from 'react';
import BasketballPlayerCard from './screen/Basketball';

import LeBron from './img/LeBron_James.jpg';
import KevinDurant from './img/Kevin_Durant.jpg';
import StephenCurry from './img/Stephen_Curry.jpg';
import GiannisAntetokounmpo from './img/Giannis_Antetokounmpo.jpg';
import JamesHarden from './img/James_Harden.jpg';

function App() {
  const players = [
    {
      name: "LeBron James",
      image: LeBron,
      position: "Forward",
      stats: {
        pointsPerGame: 25.4,
        assistsPerGame: 7.1,
        reboundsPerGame: 10.5
      }
    },
    {
      name: "Kevin Durant",
      image: KevinDurant,
      position: "Forward",
      stats: {
        pointsPerGame: 27.0,
        assistsPerGame: 5.0,
        reboundsPerGame: 7.0
      }
    },
    {
      name: "Stephen Curry",
      image: StephenCurry,
      position: "Guard",
      stats: {
        pointsPerGame: 30.1,
        assistsPerGame: 6.7,
        reboundsPerGame: 5.3
      }
    },
    {
      name: "Giannis Antetokounmpo",
      image: GiannisAntetokounmpo,
      position: "Forward",
      stats: {
        pointsPerGame: 28.8,
        assistsPerGame: 5.9,
        reboundsPerGame: 11.0
      }
    },
    {
      name: "James Harden",
      image: JamesHarden,
      position: "Guard",
      stats: {
        pointsPerGame: 24.6,
        assistsPerGame: 10.8,
        reboundsPerGame: 6.2
      }
    }
  ];

  return (
    <div className="App">
      {players.map((player, index) => (
        <BasketballPlayerCard
          key={index}
          name={player.name}
          image={player.image}
          position={player.position}
          stats={player.stats}
        />
      ))}
    </div>
  );
}

export default App;
