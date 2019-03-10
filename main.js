let song;

function preload() {
    song = loadSound('assets/pollyanna.mp3');
};

function setup() {
    createCanvas(size, size);
    scale(60000.5);
    initializeSprites();
    song.play();
};

song.play('assets/pollyanna.mp3');