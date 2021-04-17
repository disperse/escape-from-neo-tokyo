import Phaser from 'phaser';
import TILE_SIZE from './consts'

class MyGame extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.multiatlas('spritesheet', 'src/assets/spritesheet.json', 'src/assets/');
    }
      
    create ()
    {
        const player = this.add.sprite(100, 100, 'spritesheet', 'player/0001.png');
        const frameNames = this.anims.generateFrameNames('spritesheet', {
            start: 1, end: 3, zeroPad: 4,
            prefix: 'player/', suffix: '.png'
        });
        this.anims.create({ key: 'playeranim', frames: frameNames, frameRate: 5, repeat: -1 });
        player.anims.play('playeranim');
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'escape-from-neo-tokyo',
    width: 800,
    height: 600,
    scene: MyGame
};

const game = new Phaser.Game(config);
