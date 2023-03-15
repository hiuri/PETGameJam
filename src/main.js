import Phaser from './lib/phaser.js'

import Scene_center from './scenes/map1_center/Scene_center.js'

export default new Phaser.Game({
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [Scene_center, ],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 1000
            },
            debug: true
        }
    }
})