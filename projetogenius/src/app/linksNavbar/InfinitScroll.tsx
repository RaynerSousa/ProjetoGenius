import "./InfinitScroll.css";
import React from "react";

export function InfiniteScrollHorizontal() {
  return (
    <div className=" mt-16 mb-40">
      <div className="mb-13 mt-15 ">
        <p className="text-3xl font-bold text-white flex items-center justify-center">Nossas Parcerias</p>
      </div>
      <div className="wrapper ">
        <div className="img-item" style={{ "--i": 1 } as React.CSSProperties}>
          <img src="/verificacao.jpg" alt="" />
        </div>
        <div className="img-item" style={{ "--i": 2 } as React.CSSProperties}>
          <img src="/verificacao.jpg" alt="" />
        </div>
        <div className="img-item" style={{ "--i": 3 } as React.CSSProperties}>
          <img src="/verificacao.jpg" alt="" />
        </div>
        <div className="img-item " style={{ "--i": 4 } as React.CSSProperties}>
          <img src="/verificacao.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
