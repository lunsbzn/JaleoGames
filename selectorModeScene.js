class selectorModeScene extends Phaser.Scene {
    constructor() {
        super("selectorModeScene");

    }
    preload() {

        this.load.image('volver', 'assets/botonvolver.png');
        this.load.image('online', 'assets/online.png');
        this.load.image('offline', 'assets/offline.png');
        this.load.image('bg-image-menu', 'assets/bg-image-menu.jpg');
        this.load.audio("click", ["master/resources/audio/click.mp3"]);

    }

    create() {
        this.add.image(0, 0, "bg-image-menu").setOrigin(0).setScale(0.75);
        this.clickSound = this.sound.add("click");

        let playButtonOffline = this.add.image(game.config.width / 2 + 40, game.config.height / 2 - 150, "offline").setScale(0.6);
        let playButtonOnline = this.add.image(game.config.width / 2 + 40, game.config.height / 2 + 18, "online").setScale(0.6);
        let playButtonVolver = this.add.image(game.config.width / 2 + 40, game.config.height / 2 + 150, "volver").setScale(0.6);


        playButtonVolver.setInteractive();
        playButtonVolver.on('pointerdown', () => {

            this.clickSound.play();
            this.scene.start('mainScene')
        })
        playButtonOffline.setInteractive();
        playButtonOffline.on('pointerdown', () => {
            
            this.clickSound.play();
            this.scene.start('selectorLevelScene')
        })

    }
};