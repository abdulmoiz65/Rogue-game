import React , {useRef , useEffect ,useState} from 'react';
import InputManager from './InputManager';

const Rogue = ({ width, height, tilesize }) => {

const canvasRef = useRef();
let inputManager = new InputManager();
const [player,setplayer] = useState({x:64 , y:128});

const handleInput = (action,data)=> {
    console.log(`handle input : $(action) : ${JSON.stringify(data)}`);
    let newplayer = {...player};
    newplayer.x += data.x * tilesize;
    newplayer.y += data.y * tilesize;
    setplayer(newplayer);
}



useEffect(()=>{
    console.log("bindkeys");
    inputManager.bindkeys();
    inputManager.subscribe(handleInput);
    return()=>
        {
            inputManager.unbindkeys();
            inputManager.unsubscribe(handleInput);
        }
})

useEffect( () =>{
    console.log("draw a canvas");
    const ctx = canvasRef.current.getContext('2d');
    ctx.clearRect(0,0,width * tilesize ,height * tilesize); 
    ctx.fillStyle="black";
    ctx.fillRect(player.x,player.y,16,16,);
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
