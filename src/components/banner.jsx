import React from "react";

function Banner() {
  return (
    <React.Fragment>
      <header className="flex justify-between px-10 py-10 bg-zinc-400 content-center">
        <div className="font-['sevillana'] text-3xl">Museo de arte moderno</div>
        <div className="pt-2">
          <ul className="flex justify-between list-none">
            <li className="px-7 font-bold text-lg">Museos</li>
            <li className="px-7 font-bold text-lg">Artistas</li>
            <li className="px-7 font-bold text-lg">Movimientos</li>
          </ul>
        </div>
      </header>
    </React.Fragment>
  );
}

export default Banner;
