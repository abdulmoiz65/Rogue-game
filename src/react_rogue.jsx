import React from 'react';

const Rogue = ({ width, height, tilesize }) => {
 
  return (
    <canvas
      width={width * tilesize}
      height={height * tilesize}
      style={{border : '1px solid'}}
    ></canvas>
  );
};

export default Rogue;
