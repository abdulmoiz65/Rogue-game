import React , {useRef , useEffect ,useState} from 'react';
import InputManager from './InputManager';
import Player from './player';

const Rogue = ({ width, height, tilesize }) => {

const canvasRef = useRef();
let inputManager = new InputManager();
const [player,setplayer] = useState(new Player(1,1,tilesize));

const handleInput = (action,data)=> {
    console.log(`handle input : $(action) : ${JSON.stringify(data)}`);
    let newplayer = new Player();
    Object.assign(newplayer,player);
    newplayer.move(data.x,data.y);
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
    player.draw(ctx);
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
