import React , {useRef , useEffect} from 'react';

const Rogue = ({ width, height, tilesize }) => {

const canvasRef = useRef();
useEffect( () =>{
    console.log("draw a canvas");
    const ctx = canvasRef.current.getContext('2d');
    ctx.clearRect(0,0,width * tilesize ,height * tilesize); 
    ctx.fillStyle="black";
    ctx.fillRect(12,22,16,16,);
})  

return (
    <canvas
      ref={canvasRef}
      width={width * tilesize}
      height={height * tilesize}
      style={{border : '1px solid'}}
    ></canvas>
  );
};

export default Rogue;
