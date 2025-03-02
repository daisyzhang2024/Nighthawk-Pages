// tons of stuff with loading all the stuff

import GameEnv from './GameEnv.js';
import Background from './Background.js';
import Background2 from './Background2.js';
import Platform from './Platform.js';
import PlatformO from './PlatformO.js';
import Player from './Player.js';
import Tube from './Tube.js';
import Thing1 from './thing.js';
import Enemy from './Enemy.js';
import Bunny from './Bunny.js';

// Store the assets and attributes of the Game at the specific GameLevel.
class GameLevel {
    constructor(gameObject) {
        // conditional assignments from GameObject to instance variables
        this.tag = gameObject?.tag;
        this.backgroundImg2 = gameObject.background2?.file;
        this.backgroundImg = gameObject.background?.file;
        this.platformImg = gameObject.platform?.file;
        this.platformOImg = gameObject.platformO?.file;
        this.thingImg = gameObject.thing?.file;
        this.playerImg = gameObject.player?.file;
        this.playerData = gameObject?.player;
        this.enemyImg = gameObject.enemy?.file;
        this.enemyData = gameObject?.enemy;
        this.bunnyImg = gameObject.bunny?.file;
        this.bunnyData = gameObject?.bunny;
        console.log(gameObject);
        this.tubeImg = gameObject.tube?.file;
        this.parallaxSpeed = gameObject?.parallaxSpeed;
        this.isComplete = gameObject?.callback; // function that determines if level is complete
        GameEnv.levels.push(this);
    }

    // Load level data
    async load() {
        
        // test for presence of Images
        const imagesToLoad = [];
        if (this.backgroundImg2) { // NOTE: DO NOT TOUCH AT ALL PLEASE
            imagesToLoad.push(this.loadImage(this.backgroundImg2));
        }
        if (this.backgroundImg) {
            imagesToLoad.push(this.loadImage(this.backgroundImg));
        }
        if (this.platformImg) {
            imagesToLoad.push(this.loadImage(this.platformImg));
        }
        if (this.platformOImg) {
            imagesToLoad.push(this.loadImage(this.platformOImg));
        }
        if (this.thingImg) {
            imagesToLoad.push(this.loadImage(this.thingImg));
        }
        if (this.playerImg) {
            imagesToLoad.push(this.loadImage(this.playerImg));
        }
        if (this.enemyImg) {
            imagesToLoad.push(this.loadImage(this.enemyImg));
        }
        if (this.bunnyImg) {
            imagesToLoad.push(this.loadImage(this.bunnyImg));
        }
        if (this.tubeImg) {
            imagesToLoad.push(this.loadImage(this.tubeImg));
        }

        try {
            // Do not proceed until images are loaded
            const loadedImages = await Promise.all(imagesToLoad);
            var i = 0;

            // Prepare HTML with Background Canvas (if backgroundImg is defined)
            if (this.backgroundImg2) {
                const backgroundCanvas = document.createElement("canvas");
                backgroundCanvas.id = "background";
                document.querySelector("#canvasContainer").appendChild(backgroundCanvas);
                const backgroundSpeedRatio = 0;
                new Background2(backgroundCanvas, loadedImages[i], backgroundSpeedRatio);
                i++;
            }
            if (this.backgroundImg) {
                const backgroundCanvas = document.createElement("canvas");
                backgroundCanvas.id = "background";
                document.querySelector("#canvasContainer").appendChild(backgroundCanvas);
                const backgroundSpeedRatio = 0;
                new Background(backgroundCanvas, loadedImages[i], backgroundSpeedRatio);
                i++;
            }

            // Prepare HTML with Platform Canvas (if platformImg is defined)
            if (this.platformImg) {
                const platformCanvas = document.createElement("canvas");
                platformCanvas.id = "platform";
                document.querySelector("#canvasContainer").appendChild(platformCanvas);
                const platformSpeedRatio = 0;
                new Platform(platformCanvas, loadedImages[i], platformSpeedRatio);
                i++;
            }
            if (this.platformOImg) {
                const platformCanvas = document.createElement("canvas");
                platformCanvas.id = "platform";
                document.querySelector("#canvasContainer").appendChild(platformCanvas);
                new PlatformO(platformCanvas, loadedImages[i]);
                i++;
            }
            if (this.thingImg) {
                const thingCanvas = document.createElement("canvas");
                thingCanvas.id = "thing";
                document.querySelector("#canvasContainer").appendChild(thingCanvas);
                new Thing1(thingCanvas, loadedImages[i]);
                i++;
            }
            // Prepare HTML with Player Canvas (if playerImg is defined)
            if (this.playerImg) {
                const playerCanvas = document.createElement("canvas");
                playerCanvas.id = "character";
                document.querySelector("#canvasContainer").appendChild(playerCanvas);
                const playerSpeedRatio = 0.1;
                new Player(playerCanvas, loadedImages[i], playerSpeedRatio, this.playerData);
                i++;
            }

            if (this.enemyImg) {
                const enemyCanvas = document.createElement("canvas");
                enemyCanvas.id = "enemy";
                document.querySelector("#canvasContainer").appendChild(enemyCanvas);
                const enemySpeedRatio = 0.7;
                new Enemy(enemyCanvas, loadedImages[i], enemySpeedRatio, this.enemyData);
                i++;
            }

            if (this.bunnyImg) {
                const bunnyCanvas = document.createElement("canvas");
                bunnyCanvas.id = "bunny";
                document.querySelector("#canvasContainer").appendChild(bunnyCanvas);
                const bunnySpeedRatio = 0.9;
                new Bunny(bunnyCanvas, loadedImages[i], bunnySpeedRatio, this.bunnyData);
                i++;
            }


            // Prepare HTML with Player Canvas (if playerImg is defined)
            if (this.tubeImg) {
                const tubeCanvas = document.createElement("canvas");
                tubeCanvas.id = "tube";
                document.querySelector("#canvasContainer").appendChild(tubeCanvas);
                new Tube(tubeCanvas, loadedImages[i]);
                i++;
            }
        } catch (error) {
            console.error('Failed to load one or more images:', error);
        }

    }

    // Create a function to load an image and return a Promise
    async loadImage(src) {
        return new Promise((resolve, reject) => {
            const image = new Image();
            image.src = src;
            image.onload = () => resolve(image);
            image.onerror = reject;
        });
    }
}


export default GameLevel;