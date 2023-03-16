import Phaser from './lib/phaser.js'

import Scene_center from './scenes/map1_center/Scene_center.js'
import Scene_up from './scenes/map2_up/Scene_up.js'
import Scene_left from './scenes/map5/Scene_left.js'
export default new Phaser.Game({
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [Scene_left, ],
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