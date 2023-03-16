import Phaser from '../../lib/phaser.js';

export default class Scene_left extends Phaser.Scene{
    constructor(){
        super('scene_left');
    }

    init(){
        this.velocityJorge = 1;
        this.lifes = 1;
        this.dragonLifes = 10;
        this.jorgeWidth = 48;
        this.jorgeHeight = 64;
        this.horsePosX = 100;
        this.horsePosY = 300;
        this.horseDirY = true;//true é up, false é down
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
            key: "horse-mov-up",
            frames: this.anims.generateFrameNumbers("horse", {start:0, end:3}),
            frameRate: 6,
            repeat: -1,
            //this.horsew.setVelocityY(-15)
        });

        this.anims.create({
            key: "horse-mov-down",
            frames: this.anims.generateFrameNumbers("horse", {start:8, end:11}),
            frameRate: 6,
            repeat: -1,
            //this.horsew.setVelocityY(15)
        });

        this.horsew.children.iterate((horse)=>{
            horse.play("horse-mov-up")
        });
        //this.horsew.setVelocityY(-50)
    }

    update(){
        if(this.horseDirY == true){
            if(this.horsePosY >= 20){
                this.horsew.setVelocityY(-50);
                this.horsePosY = this.horsePosY - 1;
            }
            else{
                this.horsew.setVelocityY(50);
                this.horseDirY = false;
                horse.play("horse-mov-down");
            }
        }
        else if(this.horseDirY == flase){
            if(this.horsePosY < 550){
                this.horsew.setVelocityY(50);
                this.horsePosY = this.horsePosY + 1;
            }
            else{
                this.horsew.setVelocityY(-50);
                this.horseDirY = false;
                horse.play("horse-mov-up");
            }
        }
        
    }
}