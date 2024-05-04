const canva = document.getElementById("canvas");
const c = canva.getContext("2d");

canva.width = 1024;
canva.height = 576;

c.fillRect(0,0, canva.width, canva.height);

const mapImage = new Image();
mapImage.src = '/PokemonStyle_Game/Images/PokemonStyleGame_Map.png';

const playerImage = new Image();
playerImage.src = '/PokemonStyle_Game/Images/playerDown.png';

class Sprite{
    constructor({ position, velocity, image}){
        this.position = position;
        this.velocity = velocity;
        this.image = image;
    }

    draw(){
        c.drawImage(this.image, this.position.x,this.position.y);
    }
}

const background = new Sprite({
    position: {
        x:-110,
        y:-400
    },
    image: mapImage
}); 

const player = new Sprite({
    
});

const keys = {
    w:{
        pressed: false
    },
    s:{
        pressed: false
    },
    a:{
        pressed: false
    },
    d:{
        pressed: false
    }
}

function animate(){ 
    window.requestAnimationFrame(animate);
    background.draw();

        c.drawImage(
            playerImage,
            0,
            0,
            playerImage.width / 4,
            playerImage.height,
            canva.width / 2 - playerImage.width / 4 / 2 ,
            canva.height / 2 - playerImage.height / 2,
            playerImage.width / 4,
            playerImage.height
        )

    if(keys.w.pressed && lastKeyPressed == "w") background.position.y += 3;
    else if(keys.s.pressed && lastKeyPressed == "s") background.position.y -= 3;
    else if(keys.d.pressed && lastKeyPressed == "d") background.position.x -= 3;
    else if(keys.a.pressed && lastKeyPressed == "a") background.position.x += 3;
}
animate();


let lastKeyPressed = "";
window.addEventListener("keydown", (e) => {
    switch (e.key){
        case "w":
           keys.w.pressed = true;
           lastKeyPressed = "w";
            break;
        case "s":
            keys.s.pressed = true;
            lastKeyPressed = "s";
            break;
        case "a":
            keys.a.pressed = true;
            lastKeyPressed = "a";
            break;
        case "d":
            keys.d.pressed = true;
            lastKeyPressed = "d";
            break;
    }   
});



window.addEventListener("keyup", (e)=>{
    switch (e.key){
        case "w":
           keys.w.pressed = false;
            break;
        case "s":
            keys.s.pressed = false;
            break;
        case "a":
            keys.a.pressed = false;
            break;
        case "d":
            keys.d.pressed = false;
            break;
    } 
});
