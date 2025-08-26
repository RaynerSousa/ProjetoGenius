import "./InfinitScroll.css";
import React from "react";

// const img = [
//   "/computadores.png",
//   "/genius_comp.png",
//   "/verificacao.jpg",
//   "/empresarios.jpeg",
// ];


export function InfiniteScrollHorizontal() {
  return (
    <div className="wrapper">
      <div className="img-item" style={{ "--i": 1 } as React.CSSProperties}>
        <img src="/verificacao.jpg" alt="" />
      </div>
      <div className="img-item" style={{ "--i": 2 } as React.CSSProperties}>
        <img src="/verificacao.jpg" alt="" />
      </div>
      <div className="img-item" style={{ "--i": 3 } as React.CSSProperties}>
        <img src="/verificacao.jpg" alt="" />
      </div>
      <div className="img-item" style={{ "--i": 4 } as React.CSSProperties}>
        <img src="/verificacao.jpg" alt="" />
      </div>
    </div>
  );
}

