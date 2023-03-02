<script>
    import Game from "./Game.svelte";
    import { vars } from "./utils";
    const { ipcRenderer } = require('electron');

    const switchfocus = new Audio('audio/switchfocus.mp3')
    const startaudio = new Audio('audio/audiostart4.mp3')

    var focusID = -1;

    var ingame = -1;

    ipcRenderer.on('game-start', (event, arg) => {
        ingame = arg;
    });

    ipcRenderer.on("game-stop", (event, arg) => {
        ingame = -1;
    });

    ipcRenderer.on("game-error", (event, arg) => {
        ingame = -1;
        console.error(arg);
    });

    /**
     * @param {KeyboardEvent} e
     */
    function keydown(e) {
        if(![vars.keys.up, vars.keys.down, vars.keys.left, vars.keys.right, vars.keys.start].includes(e.code)) return;

        if(e.code == vars.keys.start && focusID > -1) {
            ipcRenderer.send('start', focusID);
            startaudio.pause();
            startaudio.currentTime = 0;
            startaudio.play();
            return;
        }

        if(e.code == vars.keys.up) {
            focusID += 3;
        } else if(e.code == vars.keys.down) {
            focusID -= 3;
        } else if(e.code == vars.keys.right) {
            focusID++;
        } else if(e.code == vars.keys.left) {
            focusID--;
        }
        if(focusID < 0) focusID = vars.games.length - 1;
        if(focusID > vars.games.length - 1) focusID = 0;
        switchfocus.pause();
        switchfocus.currentTime = 0;
        switchfocus.play();
    }
</script>

<svelte:window on:keydown={keydown} />

<svelte:head>
    <title>UI</title>
</svelte:head>


<div class="hlavnidiv">
    <div class="container">
        {#each vars.games as game, i (game)}
            <Game {game} hasFocus={focusID == i} running={ingame == i} />
        {/each}
    </div>
</div>

<style>
    .container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-gap: 15px;
        margin-top: 10px;
        height: 90vh;
        width: 100vw;
        padding: 2rem;
        margin: 0 auto;
    }

    .hlavnidiv {
        aspect-ratio: 3/4;
        background-image: url("images/BACKGROUND GOOD.png");
        background-size: cover;
    }
</style>