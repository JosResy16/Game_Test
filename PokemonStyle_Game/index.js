const canva = document.getElementById("canvas");
const c = canva.getContext("2d");

canva.width = 1024;
canva.height = 576;

c.fillRect(0,0, canva.width, canva.height);

const map = new Image();
map.src = '/PokemonStyle_Game/Images/PokemonStyleGame_Map.png';

const player = new Image();
player.src = '/PokemonStyle_Game/Images/playerDown.png';

map.onload = () => {
    c.drawImage(map,-110,-400);
    c.drawImage(
        player,
        0,
        0,
        player.width / 4,
        player.height,
        canva.width / 2 - player.width / 4 / 2 ,
        canva.height / 2 - player.height / 2,
        player.width / 4,
        player.height
    );
}

window.addEventListener("keydown", (e) => {
    switch (e.key){
        case "w":
            //move up
            break;
        case "s":
            //move down
            break;
        case "a":
            //move left
            break;
        case "d":
            //move rigth
            break;
    }
    
});

