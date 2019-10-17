# smartcontract_template_js
  ### a library to interact with duel smart contract

  install duel sdk: `npm i smartcontract_template_js --save`

  

  * alice creates an arena with arena_id `skyrim_room_1`, stakes 10 COS, `skyrim_admin` is the referee
  
    ```shell
    const Gladiator = require('smartcontract_template_js/duel.js').Gladiator;
    const gladiator = new Gladiator("alice", "herPrivKey");
    gladiator.open_arena("skyrim_admin", "skyrim_room_1", "10.000000");
    ```
  
  * bob wants to join an arena that is created by alice, 
  
    ```shell
    const Gladiator = require('smartcontract_template_js/duel.js').Gladiator;
    const gladiator = new Gladiator("bob", "hisPrivKey");
    gladiator.join_arena("alice", "skyrim_admin", "skyrim_room_1", "10.000000");
    ```

* The duel is over, the referee `skyrim_admin`  decides bob is the winner
  
    ```shell
    const Gladiator = require('smartcontract_template_js/duel.js').Gladiator;
    const gladiator = new Gladiator("skyrim_admin", "hisPrivKey");
    gladiator.close_arena("alice", "bob");
    ```


