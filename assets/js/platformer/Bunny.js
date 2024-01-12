import Character from './Character.js';
import GameEnv from './GameEnv.js';

export class Bunny extends Character {
    // constructors sets up Character object 
    constructor(canvas, image, speedRatio, bunnyData){
        super(canvas, 
            image, 
            speedRatio,
            bunnyData.width, 
            bunnyData.height, 
        );

        // Player Data is required for Animations
        this.bunnyData = bunnyData;
        //Initial Position of Goomba
        this.x = .60 * GameEnv.innerWidth;
    }
    update() {
        // Check if the enemy is at the left or right boundary
        if (this.x <= 0 || this.x + this.width >= GameEnv.innerWidth) {
            // Change direction by reversing the speed
            this.speed = -this.speed;
        }
        //Randomly change when the Goomba changes position
        if (Math.random() < 0.006) {
            this.speed = Math.random() < 0.5 ? -this.speed : this.speed;
        }

        //Initially get the enemy moving
        this.x += this.speed;

    };
}
export default Bunny