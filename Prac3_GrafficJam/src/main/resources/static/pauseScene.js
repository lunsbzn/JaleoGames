class pauseScene extends Phaser.Scene{
   
    constructor(){
        super("pauseScene");
    }

    preload() {
        this.load.image('menup', 'resources/Fondopause.png');
        this.load.image('restart', 'resources/volveraempezar.png');
        this.load.image('resume', 'resources/reanudar.png');

    }
    
    create(){
        this.background = this.add.image(0,0,"menup").setOrigin(0).setScale(1);

        let restart = this.add.image(600,450,"restart").setScale(0.5);
        restart.setInteractive();
        restart.on('pointerdown',()=>{       
            this.scene.stop('gameWin');
            this.scene.stop('gameOver');
            this.scene.stop('Level1');
            this.scene.start('Level1');
            
        })

        let resume = this.add.image(200,450,"resume").setScale(0.5);
        resume.setInteractive();
        resume.on('pointerdown',()=>{    
            this.scene.stop('gameWin');
            this.scene.stop('gameOver');        
            this.scene.wake('Level1');
            this.scene.stop('pauseScene');
        })

    }
};

