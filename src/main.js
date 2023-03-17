import Phaser from './lib/phaser.js'

import Scene_center from './scenes/map1_center/Scene_center.js'
import Scene_up from './scenes/map2_up/Scene_up.js'
import Scene_left from './scenes/map5_left/Scene_left.js'

const fs = require('fs')
  
//Lendo os dados iniciais de um TXT
fs.readFile('data.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
})

export default new Phaser.Game({
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [Scene_center ,Scene_up, Scene_left ],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 0
            },
            debug: false
        }
    }
})