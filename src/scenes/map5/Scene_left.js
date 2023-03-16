import Phaser from '../../lib/phaser.js';

export default class Scene_left extends Phaser.Scene{
    constructor(){
        super('scene_left');
    }

    preload(){
        this.load.image("background", "./src/scenes/map5/img/map_left.jpg")
        this.load.spritesheet("horse", "./src/scenes/map5/img/horse-white.png",{
            frameWidth: 128,
            frameHeight: 128,
        });
    }

    create(){
        this.background = this.add.tileSprite(400,300,800,600, "background");

        //adicionando o CAVALO no mapa
        //adicionar movimentacao inicial do cavalo parad0!!!
        this.horsew = this.physics.add.group()
        this.horsew.create(
            100,300, "horse"
        ).setScale(1)

        this.anims.create({
            key: "horse-mov",
            frames: this.anims.generateFrameNumbers("horse", {start:0, end:3}),
            frameRate: 6,
            repeat: -1
        });

        this.horsew.children.iterate((horse)=>{
            horse.play("horse-mov")
        });

        //Propriedades fisicas do cavalo
        this.horsew.setVelocityY(-1);

        const points = [
            { x: 200, y: 300 },
            { x: 400, y: 300 },
            { x: 400, y: 500 },
            { x: 200, y: 500 },
        ];

        let currentPintIndex = 0;

        
    }
}