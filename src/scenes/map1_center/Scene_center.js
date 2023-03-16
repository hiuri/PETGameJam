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
        this.jorgeWidth = 48;
        this.jorgeHeight = 64;
    }


    preload(){
        this.load.image("background", "./src/scenes/map1_center/img/map_center.jpg");
        this.load.spritesheet("jorge","./src/img/jorge.png",{
            frameWidth: 48,
            frameHeight: 64,
        });

        // criando as teclas
        this.keys = this.input.keyboard.createCursorKeys();
        this.escKey = this.input.keyboard.addKey(
            Phaser.Input.Keyboard.KeyCodes.ESC
        );
    }
    
    create(){
        const { width, height } = this.scale;
        // adicionando o background
        this.background = this.add.tileSprite(400,300,800,600,"background");

        /*
        this.jorge = this.physics.add.sprite(width / 2, height - 50, "jorge");
        this.jorge.setScale(0.1)
        */
        
        this.jorges = this.physics.add.group()
        this.jorges.create(
            385,199, "jorge"
        ).setScale(0.8)
            
        this.anims.create({
            key: "jorge_idle",
            frames: this.anims.generateFrameNumbers("jorge", {start:0, end:2}),
            frameRate: 7,
            repeat:-1
        });

        this.jorges.children.iterate((jorge)=>{
            jorge.play("jorge_idle")
        })

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

    move() {
        if (this.keys.left.isDown && this.jorge.x > this.jorgeWidth / 2) {
          this.jorge.setVelocityX(-200);
        } else if (
          this.keys.right.isDown &&
          this.jorge.x < this.scale.width - this.jorgeWidth / 2
        ) {
          this.jorge.setVelocityX(200);
        } else {
          this.jorge.setVelocityX(0);
        }
    
        if (this.keys.up.isDown && this.jorge.y > this.jorgeHeight / 2) {
          this.jorge.setVelocityY(-200);
        } else if (
          this.keys.down.isDown &&
          this.jorge.y < this.scale.height - this.jorgeHeight / 2
        ) {
          this.jorge.setVelocityY(200);
        } else {
          this.jorge.setVelocityY(0);
        }
      }
}