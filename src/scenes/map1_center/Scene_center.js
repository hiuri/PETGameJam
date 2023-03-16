import Phaser from '../../lib/phaser.js'


export default class Scene_center extends Phaser.Scene{
    constructor(){
        super('scene_center');
    }

    //Variaveis iniciais
    init(){
        this.velocityJorge = 1;
        this.lifes = 1;
        this.dragonLifes = 10;
    }


    preload(){
        this.load.image("background", "./src/scenes/map1_center/img/map_center.jpg");
        this.load.spritesheet("jorge","./src/img/jorge.png";)
    }
    
    create(){
    
        // adicionando o background
        this.background = this.add.tileSprite(400,300,800,600,"background");

        //Textos do game
        this.lifesText = this.add.text(10,40, `Vidas: ${this.lifes}`,{
            fontSize: 20,
            color: "#fff",
          });
  
          this.dragonLifesText = this.add.text(620,40, `HP Dragão: ${this.dragonLifes}`,{
            fontSize: 20,
            color: "#fff",
          });
    }
    
    update(){

    }
}