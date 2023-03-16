import Phaser from '../../lib/phaser.js'


export default class Scene_center extends Phaser.Scene{
    constructor(){
        super('scene_center');
    }

    preload(){
        this.load.image("background", "./src/scenes/map1_center/img/map_center.jpg");
    }
    
    create(){
    
        // adicionando o background
        this.background = this.add.tileSprite(400,300,800,600,"background");
    }
    
    update(){

    }
}