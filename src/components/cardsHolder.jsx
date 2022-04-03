import React, { useEffect, useState } from "react";
import Card from "./card";
import ObraCard from "./obraCard";

const MUSEUMS = "https://back-museums-uniandes.herokuapp.com/api/museums";

function CardsHolder() {
  const [data, setData] = useState([]);
  const [cards, setCards] = useState(true);
  const [currentCard, setCurrentCard] = useState(null);

  const getPos = (id) => {
    setCurrentCard(data[id]);
    setCards((prevState) => !prevState);
  };

  console.log(currentCard);
  useEffect(() => {
    fetch(MUSEUMS)
      .then((res) => res.json())
      .then((results) => {
        setData(results);
      });
  }, []);

  if (Object.keys(data).length === 0) {
    return <React.Fragment>Loading...</React.Fragment>;
  } else {
    if (cards) {
      return (
        <React.Fragment>
          <div className="flex justify-between pt-10 mx-36">
            {data.map((museum, key) => {
              return <Card museum={museum} key={key} pos={key} getPos={getPos} />;
            })}
          </div>
        </React.Fragment>
      );
    } else {
      if (currentCard !== null) {
        document.getElementById("title").innerHTML = `Museum ${currentCard.name}: Main Artwork`;
        return (
          <React.Fragment>
            <div className="grid grid-cols-1 pt-10 mx-36">
              {currentCard.artworks.map((artwork) => {
                return <ObraCard artwork={artwork} />;
              })}
            </div>
          </React.Fragment>
        );
      }
    }
  }
}

export default CardsHolder;
