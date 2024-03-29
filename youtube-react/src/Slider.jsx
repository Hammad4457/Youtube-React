import React, { useState } from "react";

function Slider({ data }) {
  let [currentPic, setPic] = useState(0);
  let length = data.length - 1;

  const next = () => {
    let nextPic = currentPic + 1;
    if (nextPic > length) {
      nextPic = 0;
    }
    setPic(nextPic);
  };

  const prev = () => {
    let prevPic = currentPic - 1;
    if (prevPic < 0) {
      prevPic = length;
    }
    setPic(prevPic);
  };

  return (
    <div className='image-container'>
      <img className='img' src={data[currentPic].image} alt='current' />
      <button id='Prev' onClick={prev}>
        Prev
      </button>
      <button id='Next' onClick={next}>
        Next
      </button>
    </div>
  );
}

export default Slider;
