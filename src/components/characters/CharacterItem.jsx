import React from "react";

const CharacterItem = ({ item }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={item.flag} alt="" />
        </div>
        <div className="card-back">
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Native Name:</strong>
              {item.nativeName}
            </li>
            <li>
              <strong>Capital:</strong>
              {item.capital}
            </li>
            <li>
              <strong>Region:</strong>
              {item.subregion}
            </li>

            <li>
              <strong>Population:</strong>
              {item.population}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
