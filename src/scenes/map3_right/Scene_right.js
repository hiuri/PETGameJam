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
        this.load.image("background", "../src/scenes/map3_right/img/map_0.png")
        //Bau
        this.load.spritesheet("bau", "./src/scenes/map3_right/img/bau.jpeg",{
            frameWidth: 32,
            frameHeight: 32,
        });

    }

    create(){        
        this.background = this.add.tileSprite(400,300,800,600, "background");

        //adicionando o BAU no mapa
        this.sbau = this.physics.add.group()
        this.sbau.create(
            500,300, "horse"
        ).setScale(1)

    }

    update(){
  
    }
}