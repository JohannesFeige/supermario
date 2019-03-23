import Entity from './Entity.js';
import { loadMarioSprite } from './sprites.js';

export function createMario() {
    return loadMarioSprite().then(sprite => {
        const mario = new Entity();
        mario.draw = function(context) {
            sprite.draw('idle', context, this.pos.x, this.pos.y);
        };
        mario.update = function(deltaTime) {
            this.pos.x += this.vel.x * deltaTime;
            this.pos.y += this.vel.y * deltaTime;
        };
        return mario;
    });
}
