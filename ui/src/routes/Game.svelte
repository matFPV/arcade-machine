<script>
    /** @type {{ title: string, image: string }} */
    export var game;
    export var hasFocus = false;
    export var running = false;

    /** @type {HTMLButtonElement} */
    var button;

    $: if(hasFocus && button) button.focus();
</script>


<button
    class="move"
    type="button"
    on:click
    bind:this={button}
    on:focus
    on:blur
    >
    <img src="{game.image}" alt="" />
    <h1 class="sex">{game.title}</h1>
    {#if running}
        <button class="running">
            running
        </button>
    {/if}
</button>

<style>
    .move {
        display: flex;
        overflow: hidden;
    
        border: 3px solid black;
    
        justify-content: flex-end;
        align-items: center;
        flex-direction: column;
        border-radius: 15px;
        position: relative;
        border-radius: 15px;
    }
    
    .move img {
        content: "";
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
        border-radius: 10px;
    }
    
    .sex {
        opacity: 0;
        bottom: 110px;
        z-index: 1;
        transition: opacity 1s, bottom 0.8s;
        position: relative;
        /* color: rgb(15, 12, 12, 0.88); */
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-weight: bolder;
    }
    
    @keyframes blik {
        0% {
            box-shadow: 0 0 0 3px rgba(255, 254, 254, 0);
        }
    
        50% {
            box-shadow: 0 0 0 3px rgba(255, 254, 254, 1);
        }
    
        100% {
            box-shadow: 0 0 0 3px rgba(255, 254, 254, 0);
        }
    }
    
    .move:focus {
        outline: none;
        animation-iteration-count: infinite;
        animation-name: blik;
        animation-duration: 1.4s;
    }
    
    .move:focus h1 {
        transition: opacity 1s, bottom 0.8s;
        z-index: 1;
        opacity: 0.9;
    
        bottom: 80px;
        position: relative;
    }
    
    .move:focus img {
        opacity: 0.68;
        /* filter: blur(2.2px); */
        transform: scale(1.05);
    }
    
    .move img {
        transition: opacity 0.6s, filter 1s, transform .6s;
        opacity: 1;
        transform: scale(1);
        /* filter: blur(0); */
    }
    .running {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 30px;
        background: green;
        border: none;
        color: white;
        font-weight: bolder;
        font-size: 1.2em;
        border-radius: 0 0 15px 15px;
    }
</style>