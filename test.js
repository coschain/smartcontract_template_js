const Gladiator = require('./duel.js').Gladiator;
const gladiator1 = new Gladiator("player1", "3QJXyNaWyfmjkrpxLEsDXyp9zSjSnZwXyqyg9iqXnr8TGWh3RF", "gladiator", "duel", "testnet");
const gladiator2 = new Gladiator("player2", "3Kz5rByk76xYBHRC4Dd5wtPeJuVSu6fdxeG7KwrHxyQZPE6MFH", "gladiator", "duel", "testnet");
const referee = new Gladiator("gladiator", "32pzKFv6PJHRdYXG3ZkDvmqFPNupr7T3kpHTFJYTDqVGErZvrX", "gladiator", "duel", "testnet");

function sleep(ms){
    return new Promise(resolve=>{
        setTimeout(resolve,ms)
    })
}

(async function init(){
   gladiator1.open_arena("gladiator", "1", "0.000000");
   await sleep(3000)
   gladiator2.join_arena("player1", "gladiator", "1", "0.000000");
   await sleep(3000)
   referee.close_arena("player1", "player2");
})();

// gladiator1.open_arena("gladiator", "1", "0.000000");
// gladiator2.join_arena("player1", "gladiator", "1", "0.000000");
// referee.close_arena("player1", "player1");