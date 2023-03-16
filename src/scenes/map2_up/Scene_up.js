import Phaser from '../../lib/phaser.js'


export default class Scene_up extends Phaser.Scene{
    constructor(){
        super('scene_up');
    }

    init(){
      this.velocityJorge = 1;
      this.velocityFire = 4;
      this.lifes = 1;
      this.dragonLifes = 10;
      this.fireGroup = this.physics.add.group();
      this.lastSpawned = 0;
      this.spawnCooldown = 500;
    }

    preload(){
        this.load.image("background", "./src/scenes/map2_up/img/map_up.jpg");
        this.load.spritesheet("dragon", "./src/scenes/map2_up/img/dragon.png",{
            frameWidth: 191,
            frameHeight: 161,
        });
        //explosion
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

    
        //adicionando o background
        this.background = this.add.tileSprite(400,300,800,600,"background");

        //adicionando o dragao no mapa
        //adicionar movimentacao inicial do dragao parad0!!!
        this.dragons = this.physics.add.group()
        this.dragons.create(
            380,100, "dragon"
        ).setScale(0.5)
        this.dragons.create(
            380,100, "dragondead"
        ).setScale(1.2)
        

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


        this.dragons.children.iterate((dragon)=>{
            dragon.play("dragon_idle")
        })


        //adicionando fogo no mapa
      

        this.anims.create({
            key: "fire_idle",
            frames: this.anims.generateFrameNumbers("fire", {start:0, end:2}),
            frameRate: 10,
            repeat:-1
        });


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
      // adicionando as bolas de fogo
      if (this.time.now > this.lastSpawned) {
        this.createFire();
        this.lastSpawned = this.time.now + this.spawnCooldown;
      }
    }

    updateLife(){
      
    }
  
    createFire() {
      this.fireGroup.create(
        Phaser.Math.Between(0.3 * this.scale.width, 0.6 * this.scale.width),
        130,
        "fire"
      );
      this.fireGroup.children.iterate((child) => {
        child.setScale(1);
        child.play("fire_idle");
        child.setVelocityY(150);
      });
  
      // removendo os inimigos que passaram para fora da tela e não foram mortos
      this.fireGroup.children.iterate((child) => {
        if (child && child.body.y > this.scale.height) child.destroy();
      });
    }
  
}