import Character from './Character.js';
import GameEnv from './GameEnv.js';

var destroy = 0;

export class Enemy extends Character {
    // constructors sets up Character object 
    constructor(canvas, image, speedRatio, enemyData){
        super(canvas, 
            image, 
            speedRatio,
            enemyData.width, 
            enemyData.height, 
        );
        destroy = 0;

        // Player Data is required for Animations
        this.enemyData = enemyData;
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

        if (destroy === 1) {
            this.destroy();
            console.log("destroyed");
        };

    };
}
export {destroy}
export default Enemy