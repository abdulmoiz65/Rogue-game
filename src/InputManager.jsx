class InputManager {
    observer = [];

    subscribe(fn){
        this.observer.push(fn)
    }
    unsubscribe(fn){
        this.observer = this.observer.filter(subscribe => subscribe !== fn);
        }

    broadcast(action , data){
        this.observer.forEach(subscribe => subscribe(action,data));
    }   
    
    handlekeys = e =>{
        e.preventDefault();
        switch(e.keyCode){
            case 37:
                 this.broadcast('move', {x:-1 , y:0});
            break;
            case 38:
                 this.broadcast('move' , {x:0 , y:-1});
            break;
            case 39:
                 this.broadcast('move',{x:1 , y:0});
            break;
            case 40:
                 this.broadcast('move',{x:0 , y:1});
            break;
            default:
                break;
        }
    }

    bindkeys(){
        document.addEventListener('keydown' , this.handlekeys);
    }
    unbindkeys(){
        document.removeEventListener('keydown',this.handlekeys);
    }

    
    
}
export default InputManager ;