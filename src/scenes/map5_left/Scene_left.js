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
        this.horseDirY = 0;//0 é up, 1 é down
        this.horseVel = 75
        this.horseD = 0;
    }

    preload(){
        this.load.image("background", "./src/scenes/map5_left/img/map_left.jpg")
        this.load.spritesheet("horse", "./src/scenes/map5_left/img/horse-and-jorge.png",{
            frameWidth: 125,
            frameHeight: 125,
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
        

        //Animação do cavalo subindo
        this.anims.create({
            key: "horse-mov-up",
            frames: this.anims.generateFrameNumbers("horse", {start:0, end:2}),
            frameRate: 6,
            repeat: -1,
        });

        //Animação do cavalo descendo
        this.anims.create({
            key: "horse-mov-down",
            frames: this.anims.generateFrameNumbers("horse", {start:8, end:11}),
            frameRate: 6,
            repeat: -1,
        });

        //Animação do cavalo indo para a esquerda
        this.anims.create({
            key: "horse-mov-left",
            frames: this.anims.generateFrameNumbers("horse", {start:4, end:7}),
            frameRate: 6,
            repeat: -1,
        });
        //Animação do cavalo indo para a direita
        this.anims.create({
            key: "horse-mov-right",
            frames: this.anims.generateFrameNumbers("horse", {start:12, end:15}),
            frameRate: 6,
            repeat: -1,
        });
        //Animação do Jorvalo subindo
        this.anims.create({
            key: "jorse-mov-up",
            frames: this.anims.generateFrameNumbers("jorse", {start:0, end:2}),
            frameRate: 6,
            repeat: -1,
        });


        this.horsew.children.iterate((horse)=>{
            horse.play("horse-mov-up")
        })

    }

    update(){

       
    }
}

//CODIGOS DUVIDOSOS

//algoritimo para deixar o cavalo subindo e descendo
/*
if(this.horseDirY == 0){
    if(this.horsePosY >= 20){
        this.horsew.setVelocityY(-50);
        this.horsePosY = this.horsePosY - 1;
    }
    else{
        this.horsew.setVelocityY(50);
        this.horseDirY = 1;
        horse.play("horse-mov-down");
    }
}
else if(this.horseDirY == 1){
    if(this.horsePosY <= 580){
        this.horsew.setVelocityY(50);
        this.horsePosY = this.horsePosY + 1;
    }
    else{
        this.horsew.se1if(this.horsePosY <= 550){
                this.horsew.setVelocityY(this.horseVel);
                this.horsePosY = this.horsePosY + 1;
            }tVelocityY(-50);
        this.horseDirY = 0;
        horse.play("horse-mov-up");
    }
}        
//algoritimo para deixar o cavalo subindo e descendo
/*if(this.horseDirY == 0){
    if(this.horsePosY >= 20){
        this.horsew.setVelocityY(-50);
        this.horsePosY = this.horsePosY - 1;
    }
    else{
        this.horsew.setVelocityY(50);
        this.horseDirY = 1;
        horse.play("horse-mov-down");
    }
}
else if(this.horseDirY == 1){
    if(this.horsePosY <= 580){
        this.horsew.setVelocityY(50);
        this.horsePosY = this.horsePosY + 1;
    }
    else{
        this.horsew.se1if(this.horsePosY <= 550){
                this.horsew.setVelocityY(this.horseVel);
                this.horsePosY = this.horsePosY + 1;
            }tVelocityY(-50);
        this.horseDirY = 0;
        horse.play("horse-mov-up");
    }
}        //horse.play("horse-mov-up");
        if(this.horseDirY == 0){
            //horse.play("horse-mov-up");
            if(this.horsePosY >= 50){
                this.horsew.setVelocityY(-this.horseVel);
                this.horsePosY = this.horsePosY - 1;
            }
            else{
                this.horsew.setVelocityY(this.horseVel);
                this.horseDirY = 1;
                //horse.play("horse-mov-down");
            }
        }
        else if(this.horseDirY == 1){
            if(this.horsePosY <= 550){
                this.horsew.setVelocityY(this.horseVel);
                this.horsePosY = this.horsePosY + 1;
            }
            else{
                this.horsew.setVelocityY(-this.horseVel);
                this.horseDirY = 0;
                //horse.play("horse-mov-up");
            }
        }
        
        if(horseD == 0){
            if(this.horsePosY >= 50){
                this.horsew.setVelocityY(-this.horseVel);
                this.horsePosY = this.horsePosY - 1;
            }else{
                horseD = 1;
            }
        }
        if(horseD == 1){
            if(this.horsePosY <= 550){
                this.horsew.setVelocityY(this.horseVel);
                this.horsePosY = this.horsePosY + 1;
            }else{
                horseD = 0;
            }
        }
        */


