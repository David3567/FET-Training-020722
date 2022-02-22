// sliding feature
let forward    = document.getElementById('next');
let back       = document.getElementById('prev');
let cards      = document.getElementById('image-container');


function moveBack () {
   let pos = -25;
    cards.style.right = `${pos}%`;
    pos - 25;
}

function moveForward () {
    let pos = 25;
    cards.style.right = `${pos}%`;
    pos + 25;
}
    



