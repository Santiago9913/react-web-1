import React from "react";

function Card({ museum }) {
  return (
    <React.Fragment>
      <div className="flex-initial flex-col justify-center bg-zinc-400 w-64">
        <img className="object-cover p-6 h-48 w-96" src={museum.image} alt={museum.name} />
        <div className="flex justify-center">
          <p className="text-xl">{museum.name}</p>
        </div>
        <div className="flex justify-center">
          <p>{museum.city}</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Card;
