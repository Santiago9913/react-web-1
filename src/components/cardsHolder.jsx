import React, { useEffect, useState } from "react";
import Card from "./card";

const MUSEUMS = "https://back-museums-uniandes.herokuapp.com/api/museums";

function CardsHolder() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(MUSEUMS)
      .then((res) => res.json())
      .then((results) => {
        setData(results);
      });
  }, []);

  console.log(data);

  if (Object.keys(data).length === 0) {
    return <React.Fragment>Loading...</React.Fragment>;
  } else {
    return (
      <React.Fragment>
        <div className="flex justify-between pt-10 mx-10">
          {data.map((museum, key) => {
            return <Card museum={museum} key={key} />;
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default CardsHolder;
