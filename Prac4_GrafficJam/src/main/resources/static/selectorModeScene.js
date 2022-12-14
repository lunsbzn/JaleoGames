class selectorModeScene extends Phaser.Scene {
    constructor() {
        super("selectorModeScene");

    }
    preload() {

        this.load.image('volver', 'resources/botonvolver.png');
        this.load.image('online', 'resources/online.png');
        this.load.image('offline', 'resources/offline.png');
        this.load.image('lobby', 'resources/lobbyBoton.png');
        this.load.image('bg-image-menu', 'resources/bg-image-menu.jpg');
        this.load.audio("click", ["resources/click.mp3"]);
    }

    create() {
        this.add.image(0, 0, "bg-image-menu").setOrigin(0).setScale(0.75);
        let playButtonOffline = this.add.image(game.config.width / 2 + 40, game.config.height / 2 - 150, "offline").setScale(0.5);
        let playButtonOnline = this.add.image(game.config.width / 2 + 40, game.config.height / 2 - 50,  "online").setScale(0.5);
        let playButtonLobby = this.add.image(game.config.width / 2 + 40, game.config.height / 2 + 50, "lobby").setScale(0.12);
        let playButtonVolver = this.add.image(game.config.width / 2 + 40, game.config.height / 2 + 150, "volver").setScale(0.5);
        
        this.clickSound = this.sound.add("click");

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

        playButtonLobby.setInteractive();
        playButtonLobby.on('pointerdown', () => {
            this.clickSound.play();
            this.scene.start('Lobby')
        })

        playButtonOnline.setInteractive();
        playButtonOnline.on('pointerdown', () => {
            this.clickSound.play();
            this.scene.start('loadingServer')
            crearJugador();
        })

    }
};