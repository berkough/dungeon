/*
 * Dungeon Crawling game insipired by https://www.playfuljs.com/a-first-person-engine-in-265-lines/
 * 
 */

class Player{
    constructor(x, y, direction) {
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.stats;
    }

    rollStats(){
    
    }
}

class Enemy extends Player{
    constructor(sprite){
        super();
        this.sprite = sprite;
    }

}

