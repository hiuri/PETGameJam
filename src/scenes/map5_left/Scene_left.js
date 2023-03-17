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
        //this.horseDirY = 0;//0 é up, 1 é down
        this.horseVel = 75
        this.horseD = 0;
    }

    preload(){
        this.load.image("background", "./src/scenes/map5_left/img/map_left.jpg")
        this.load.spritesheet("jorse", "./src/scenes/map5_left/img/horse-and-jorge.png",{
            frameWidth: 125,
            frameHeight: 125,
        });
        this.load.spritesheet("horse", "./src/scenes/map5_left/img/horse-white.png",{
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
            frames: this.anims.generateFrameNumbers("horse", {start:0, end:3}),
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
        //O Cavalo anda sempre fazendo curvas para a direita, assim formando o desenho de um retangulo

        //Cavalo sobe 
        if(this.horsePosY >=100 && this.horsePosX <= 100){
            this.horsew.setVelocity(0, -75);
            this.horsePosY = this.horsePosY - 1;
        }
        //Cavalo desce
        else if(this.horsePosY <=500 && this.horsePosX >= 400){
            this.horsew.setVelocity(0, 75);
            this.horsePosX = this.horsePosX + 1;
        }
        //Cavalo esquerda
        else if(this.horsePosX >=100 && this.horsePosY <= 100){
            this.horsew.setVelocity(75, 0);
            this.horsePosX = this.horsePosX + 1;
        }
        //Cavalo direita
        else if(this.horsePosX <=400 && this.horsePosY >= 500){
            this.horsew.setVelocity(-75, 0);
            this.horsePosX = this.horsePosX - 1;
        }

        /*
        if(horseD == 0){//O Cavalo está subindo
            if(this.horsePosY >= 50){
                this.horsew.setVelocityY(-this.horseVel);
                this.horsePosY = this.horsePosY - 1;
            }else{
                horseD = 1;
            }
        }
        if(horseD == 1){//O Cavalo está indo para a direita
            if(this.horsePosX <= 400){
                this.horsew.setVelocityX(this.horseVel);
                this.horsePosX = this.horsePosY + 1;
            }else{
                horseD = 2;
            }
        }
        if(horseD == 2){//O Cavalo está descendo
            if(this.horsePosY <= 550){
                this.horsew.setVelocityY(this.horseVel);
                this.horsePosY = this.horsePosY + 1;
            }else{
                horseD = 3;
            }
        }
        if(horseD == 3){//O Cavalo está indo para a esquerda
            if(this.horsePosX <= 50){
                this.horsew.setVelocityX(-this.horseVel);
                this.horsePosX = this.horsePosY - 1;
            }else{
                horseD = 0;
            }
        }
        */
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


