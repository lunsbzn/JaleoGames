class gameWin3 extends Phaser.Scene{
   
    constructor(){
        super("gameWin3");
    }

    initialize(){
        Phaser.Scene.call(this,{"key": "gameWin3"})
    }

    preload() {
        this.load.image('menu', 'resources/finalL1.png');
        this.load.image('inicio', 'resources/menu.png');

    }
    
    create(){
        this.background = this.add.image(0,0,'menu').setOrigin(0).setScale(1);

        let inicio = this.add.image(400,550,'inicio').setScale(0.07);
        inicio.setInteractive();
        inicio.on('pointerdown',function(){
            this.scene.stop('Level1');
            this.scene.stop('pauseScene');
            this.scene.start('selectorLevelScene');
        }, this);
    }
};
