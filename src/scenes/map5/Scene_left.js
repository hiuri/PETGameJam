import Phaser from '../../lib/phaser.js';

export default class Scene_left extends Phaser.Scene{
    constructor(){
        super('scene_left');
    }

    preload(){
        this.load.image("background", "./src/scenes/map5/img/map_left.jpg")
    }

    create(){
        this.background = this.add.tileSprite(400,300,800,600, "background");
    }
}