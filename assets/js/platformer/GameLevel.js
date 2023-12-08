import GameEnv from './GameEnv.js';
import Background from './Background.js';
import Platform from './Platform.js';
import PlatformO from './PlatformO.js';
import Player from './Player.js';
import Tube from './Tube.js';

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
        this.enemyImg = gameObject.enemies?.file;
        this.playerData = gameObject?.player;
        this.tubeImg = gameObject.tube?.file;
        this.parallaxSpeed = gameObject?.parallaxSpeed;
        this.isComplete = gameObject?.callback; // function that determines if level is complete
        GameEnv.levels.push(this);
    }

    // Load level data
    async load() {
        
        // test for presence of Images
        const imagesToLoad = [];
        if (this.backgroundImg2) {
            imagesToLoad.push(this.loadImage(this.backgroundImg2));
        }
        if (this.backgroundImg) {
            imagesToLoad.push(this.loadImage(this.backgroundImg));
        }
        if (this.platformImg) {
            imagesToLoad.push(this.loadImage(this.platformImg));
        }
        if (this.playerImg) {
            imagesToLoad.push(this.loadImage(this.playerImg));
        }
        if (this.tubeImg) {
            imagesToLoad.push(this.loadImage(this.tubeImg));
        }
        if (this.thingImg) {
            imagesToLoad.push(this.loadImage(this.platformOImg));
        }
        if (this.platformOImg) {
            imagesToLoad.push(this.loadImage(this.platformOImg));
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
                const backgroundSpeedRatio = 1;
                new Background(backgroundCanvas, loadedImages[i], backgroundSpeedRatio);
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
            // Prepare HTML with Player Canvas (if playerImg is defined)
            if (this.playerImg) {
                const playerCanvas = document.createElement("canvas");
                playerCanvas.id = "character";
                document.querySelector("#canvasContainer").appendChild(playerCanvas);
                const playerSpeedRatio = 0.1;
                new Player(playerCanvas, loadedImages[i], playerSpeedRatio, this.playerData);
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
            if (this.thingImg) {
                const thingCanvas = document.createElement("canvas");
                thingCanvas.id = "thing";
                document.querySelector("#canvasContainer").appendChild(thingCanvas);
                new Thing1(thingCanvas, loadedImages[i]);
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