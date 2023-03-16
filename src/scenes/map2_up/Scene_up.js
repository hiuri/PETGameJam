import Phaser from '../../lib/phaser.js'


export default class Scene_up extends Phaser.Scene{
    constructor(){
        super('scene_up');
    }

    preload(){
        this.load.image("background", "./src/scenes/map2_up/img/map_up.jpg");
        this.load.spritesheet("dragon", "./src/scenes/map2_up/img/dragon.png",{
            frameWidth: 191,
            frameHeight: 161,
        });

        this.load.spritesheet("dragondead", "./src/scenes/map2_up/img/explosion.png",{
            frameWidth:64,
            frameHeight:64,
        });
        this.load.spritesheet("fire", "./src/scenes/map2_up/img/fire.png",{
            frameWidth: 32,
            frameHeight: 30,
        });
    }
    
    create(){
    
        // adicionando o background
        this.background = this.add.tileSprite(400,300,800,600,"background");

        //adicionando o dragao no mapa
        //adicionar movimentacao inicial do dragao parad0!!!
        this.dragons = this.physics.add.group()
        this.dragons.create(
            380,100, "dragon"
        ).setScale(1)
        this.dragons.create(
            380,100, "dragondead"
        ).setScale(2.5)
        

        this.anims.create({
            key: "dragon_idle",
            frames: this.anims.generateFrameNumbers("dragon", {start:6, end:8}),
            frameRate: 7,
            repeat:-1
        });

        this.anims.create({
            key: "dragon_dead",
            frames: this.anims.generateFrameNumbers("dragondead", {start:0, end:15}),
            frameRate: 7,
            repeat:-1
        });


        this.dragons.children.iterate((dragondead)=>{
            dragondead.play("dragon_dead")
        })


        //

        //adicionando fogo no mapa
        this.fires = this.physics.add.group()
        this.fires.create(
            380,170, "fire"
        ).setScale(1)

        this.anims.create({
            key: "fire_idle",
            frames: this.anims.generateFrameNumbers("fire", {start:0, end:2}),
            frameRate: 10,
            repeat:-1
        });

        this.fires.children.iterate((dragon)=>{
            dragon.play("fire_idle")
        })

    }
    
    update(){
    
    }


    //Movimentacao Jorge 
    /*
    move() {
        if (this.keys.left.isDown && this.ship.x > this.shipWidth / 2) {
          this.ship.setVelocityX(-200);
        } else if (
          this.keys.right.isDown &&
          this.ship.x < this.scale.width - this.shipWidth / 2
        ) {
          this.ship.setVelocityX(200);
        } else {
          this.ship.setVelocityX(0);
        }
    
        if (this.keys.up.isDown && this.ship.y > this.shipHeight / 2) {
          this.ship.setVelocityY(-200);
        } else if (
          this.keys.down.isDown &&
          this.ship.y < this.scale.height - this.shipHeight / 2
        ) {
          this.ship.setVelocityY(200);
        } else {
          this.ship.setVelocityY(0);
        }
      }

      */
      /*
      createFire() {
        this.fireGroup.create(
          Phaser.Math.Between(0.05 * this.scale.width, 0.95 * this.scale.width),
          -40,
          "fire"
        );
        this.alienGroup.children.iterate((child) => {
          child.setScale(0.1);
          child.play("fire");
          child.setVelocityY(100);
        });
    
        // removendo os inimigos que passaram para fora da tela e não foram mortos
        this.alienGroup.children.iterate((child) => {
          if (child && child.body.y > this.scale.height) child.destroy();
        });
      }*/
}