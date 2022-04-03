import React from "react";

const img =
  "https://cdna.artstation.com/p/assets/images/images/036/542/764/large/haitam-ouahabi-art-style-doodle-abstract-surrealism-artwork-by-haitam-ouahabi.jpg?1617933074";

function ObraCard({ artwork }) {
  return (
    <React.Fragment>
      <div className="grid grid-cols-2 pb-8">
        <div className="flex-initial flex-col justify-center bg-zinc-400 w-64">
          <img className="object-cover p-6 h-48 w-96" src={img} alt={artwork.name} />
          <div className="flex justify-center">
            <p className="text-xl">{artwork.name}</p>
          </div>
        </div>
        <div className="w-auto bg-zinc-400">{artwork.description}</div>
      </div>
    </React.Fragment>
  );
}

export default ObraCard;
