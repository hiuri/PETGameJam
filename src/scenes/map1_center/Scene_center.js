import Phaser from '../../lib/phaser.js'


export default class Scene_center extends Phaser.Scene{
    constructor(){
        super('Scene_center');
    }

    preload(){
        this.load.image("background", "img/map_center.jpg");
    }
    
    create(){
    
        // adicionando o background
        this.background = this.add.tileSprite(200,200,200,200,"background");
    }
    
    update(){

    }
}