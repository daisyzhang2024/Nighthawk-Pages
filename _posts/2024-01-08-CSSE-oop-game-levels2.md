---
layout: base
title: Platformer Game v2.0 
description: Incorporate student lessons. Gameplay includes enemies, platforms, parallax backgrounds, settings with local storage, etc.  This revision introduces Settings, Leaderboard and Multiplayer.
courses: { csse: {week: 18} }
image: /images/platformer/backgrounds/home.png
comments: true
---

<!-- Syle is now located, as of Jan 2024 v2.0, in _sass/minima/platformer-styles.scss -->

<!-- DOM Settings Panel (sidebar id and div), managed by SettingsContro.js -->
<div id="sidebar" class="sidebar">
  <a href="javascript:void(0)" id="sidebar-header">&times; Settings</a>
</div>
<div id="leaderboardDropDown" class="leaderboardDropDown">
  <a href="javascript:void(0)" id="leaderboard-header">&times; Leaderboard</a>
</div>

<!--Audio for Mushroom -->
<audio id="Mushroom" src="{{site.baseurl}}/assets/audio/Mushroom.mp3" preload="auto"></audio>

<!--Audio for Girl/Harold -->
<audio id="Girl" src="{{site.baseurl}}/assets/audio/girl.mp3" preload="auto"></audio>
<audio id="Harold" src="{{site.baseurl}}/assets/audio/harold.mp3" preload="auto"></audio>

<!--Audio for Death of Goomba -->
<audio id="goombaDeath" src="{{site.baseurl}}/assets/audio/goomba-death.mp3" preload="auto"></audio>

<!--Audio for Jump oF player -->
<audio id ="PlayerJump" src="{{site.baseurl}}/assets/audio/mario-jump.mp3" preload="auto"></audio>

<!--Audio for death of player -->
<audio id ="PlayerDeath" src="{{site.baseurl}}/assets/audio/MarioDeath.mp3" preload="auto"></audio>

<!--Audio for coin collection -->
<audio id ="coin" src="{{site.baseurl}}/assets/audio/coin.mp3" preload="auto"></audio>

<!--Audio for background -->
<audio id ="bkgsound" src="{{site.baseurl}}/assets/audio/bkgsound.mp3" preload="auto"></audio>


<!-- Wrap both the controls and gameplay in a container div -->
<div id="canvasContainer">
  <div class="submenu">
    <div id="score">
        Timer: <span id="timeScore">0</span>
    </div>
    <div id="gameBegin" hidden>
        <button id="startGame">Start Game</button>
    </div>
    <div id="gameOver" hidden>
        <button id="restartGame">Restart</button>
    </div>
    <div id="settings"> <!-- Controls -->
        <!-- Background controls -->
        <button id="settings-button">Settings</button>
    </div>
    <div id="leaderboard"> <!-- Controls -->
        <button id="leaderboard-button">Leaderboard</button>
    </div>
  </div>
  <!-- JavaScript-generated canvas items are inserted here -->
</div>

<div id="container">
    <header class="fun_facts">
    <p id="num">Fun Fact #0</p>
    <h3 id="fun_fact">Mario is named after frustrated landlord, Mario Segale, of the Nintendo of America building.</h3> <!-- want to access later so have id-->
    </header>
  </div>

<footer id="cut-story"></footer>

<script type="module">
    // Imports to drive game
    import GameSetup from '{{site.baseurl}}/assets/js/platformer2/GameSetup.js';
    import GameControl from '{{site.baseurl}}/assets/js/platformer2/GameControl.js';
    import SettingsControl from '{{site.baseurl}}/assets/js/platformer2/SettingsControl.js';
    import GameEnv from '{{site.baseurl}}/assets/js/platformer2/GameEnv.js';
    import Leaderboard from '{{site.baseurl}}/assets/js/platformer2/Leaderboard.js';
    import Audio from '{{site.baseurl}}/assets/js/platformer2/Audio.js';
    import startCutstory from '{{site.baseurl}}/assets/js/platformer2/Cutstory.js';

    /* 
     * ==========================================
     * ========== Game Setup ====================
     * ==========================================
     * Game Setup prepares the Game Levels and Objects
     * 1.) There are one-to-many GameLevels in a Game
     * 2.) Each GameLevel has one-to-many GameObjects
     * ==========================================
    */

    // Setup game data, the objects and levels
    GameSetup.initLevels("{{site.baseurl}}"); 
    

    /* 
     * ==========================================
     * ========== Game Control ==================
     * ==========================================
     * Game Control starts the game loop and activates game objects
     * 1.) GameControl cycles through GameLevels
     * 2.) Each GameLevel is on a looping timer, called within the game loop 
     * 3.) The game loop allows the game player (user), to interact with the game objects 
     * 4.) A timer (or score) tracks the time of user interaction within the game
     * ==========================================
    */

    // Start the PRIMARY game loop
   GameControl.gameLoop();

    // Create an async event to start the timer when the start game button is pushed
    /* 
    * ==========================================
    * ========== Settings Control ==============
    * ==========================================
    * Settings Control provides the ability to select game level and change game settings
    * 1.) SettingsControl must be after GameControl, it depends on GameLevels 
    * 2.) GameControl extends and implements LocalStorage to support the persistence of user data
    * 3.) Modifications can be made to User ID, GameSpeed, Gravity, and Invert(ing) screen color
    * ==========================================
    */
   startCutstory();

    // Construct settings sidebar, MVC variable paradigm, and async events to trigger user interaction
    SettingsControl.sidebar();
    
    Leaderboard.leaderboardDropDown();

    /* 
     * ==========================================
     *  ========== Event / Listeners =============
     *  ==========================================
     * System Event listeners
     * 1.) Window resize and GameEnv.resize trigger system updates
     * 2.) Most event listeners remain near impacting functions
     * ==========================================
    */

    // Game refresh is required when the height and width of the screen are impacted
    window.addEventListener('resize', GameEnv.resize);

</script>

<script src="https://utteranc.es/client.js" repo = "daisyzhang2024/Nighthawk-Pages" issue-term="pathname" crossorigin="anonymous" async></script>