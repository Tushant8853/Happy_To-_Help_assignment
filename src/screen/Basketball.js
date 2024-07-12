import React from 'react';
import './Basketball.css';

const BasketballPlayerCard = (props) => {
  const name = props.name;
  const image = props.image;
  const position = props.position;
  const stats = props.stats;

  return (
    <div className="container">
      <img src={image} alt={`${name}`} className="player-image" />
      <h2 className="player-name">{name}</h2>
      <p className="player-position">{position}</p>
      <div className="player-stats">
        <p>Points per Game: {stats.pointsPerGame}</p>
        <p>Assists per Game: {stats.assistsPerGame}</p>
        <p>Rebounds per Game: {stats.reboundsPerGame}</p>
      </div>
    </div>
  );
};

export default BasketballPlayerCard;