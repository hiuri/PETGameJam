import Phaser from '../../lib/phaser.js';

export default class Scene_left extends Phaser.Scene{
    constructor(){
        super('scene_left');
    }

    /*Proposta:
    *Trocar as cenas seguindo uma ordem possivel para acender as fogueiras
    *Qualquer fogueira pode ser a primeira, porem só uma é a certa
    *A partir da segunda fogueira se a ordem estiver errada todas se apagam.
    *Quando todas as fogueiras forem acesas o bau abre e a armadura é liberada
    */

    preload(){
        this.load.image("mapa0", "../src/scenes/map3_right/img/map_0.png")
        this.load.image("mapa1_ld", "../src/scenes/map3_right/img/map_0.png")
        this.load.image("mapa1_lu", "../src/scenes/map3_right/img/map_0.png")
        this.load.image("mapa1_rd", "../src/scenes/map3_right/img/map_0.png")
        this.load.image("mapa1_ru", "../src/scenes/map3_right/img/map_0.png")
        this.load.image("mapa1_c", "../src/scenes/map3_right/img/map_0.png")
        this.load.image("mapa2", "../src/scenes/map3_right/img/map_0.png")
        this.load.image("mapa3", "../src/scenes/map3_right/img/map_0.png")
        this.load.image("mapa4", "../src/scenes/map3_right/img/map_0.png")
        this.load.image("mapa5", "../src/scenes/map3_right/img/map_0.png")
        //Bau
        this.load.spritesheet("bau", "./src/scenes/map3_right/img/bau2.png",{
            frameWidth: 32,
            frameHeight: 32,
        });

    }

    create(){        
        this.background = this.add.tileSprite(400,300,800,600, "mapa0");

        //adicionando o BAU no mapa
        this.sbau = this.physics.add.group()
        this.sbau.create(
            700,300, "bau"
        ).setScale(1)

    }

    update(){
  
    }
}