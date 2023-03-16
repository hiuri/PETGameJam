import Phaser from '../../lib/phaser.js'


export default class Scene_up extends Phaser.Scene{
    constructor(){
        super('scene_up');
    }

    preload(){
        this.load.image("background", "./src/scenes/map2_up/img/map_up.jpg");
        this.load.spritesheet("dragon", "./src/scenes/map2_up/img/dragon.png",{
            frameWidth: 400,
            frameHeight: 400,
          });
    }
    
    create(){
    
        // adicionando o background
        this.background = this.add.tileSprite(400,300,800,600,"background");

        //adicionando o dragao no mapa
        this.dragons = this.physics.add.group()
        this.dragons.create(
            400,100, "dragon"
        ).setScale(0.8)

        this.anims.create({
            key: "dragon_idle",
            frames: this.anims.generateFrameNumbers("dragon", {start:6, end:8}),
            frameRate: 60,
            repeat:-1
        });

        this.dragons.children.iterate((dragon)=>{
            dragon.play("dragon_idle")
        })
    }
    
    update(){

    }
}