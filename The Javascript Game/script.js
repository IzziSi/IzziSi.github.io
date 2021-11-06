/** Map **/
const rooms = {
    1:{
        title:"You stand in front of a dark leaky cavern.",
        exits:{north:false,south:false,east:true,west:true,northeast:false,southeast:false,northwest:false,southwest:false},
        areatype: "caves"
    },//west (to mountains),east
    2:{
        title:"The entrance of a leaky cavern.",
        exits:{north:false,south:false,east:true,west:true,northeast:false,southeast:false,northwest:false,southwest:false},
        areatype: "caves"
    },//east,west
    3:{
        title:"Deep in a leaky cavern.",
        exits:{north:false,south:false,east:false,west:true,northeast:false,southeast:true,northwest:false,southwest:false},
        areatype: "caves"
    },//west,southeast
    4:{
        titles:"A winding tunnel.",
        exits:{north:false,south:false,east:false,west:false,northeast:false,southeast:false,northwest:true,southwest:true},
        areatype: "caves"
    },//northwest,southwest
    5:{
        title:"Nearing a dead end.",
        exits:{north:false,south:false,east:false,west:true,northeast:true,southeast:false,northwest:false,southwest:false},
        areatype: "caves"
    },//northeast,west
    6:{
        title:"A dead end.",
        exits:{north:false,south:false,east:true,west:false,northeast:false,southeast:false,northwest:false,southwest:false},
        areatype: "caves"
    },//east
    7:{
        title:"The entrance of a vast luminous forest.",
        exits:{north:false,south:false,east:true,west:true,northeast:false,southeast:false,northwest:false,southwest:false},
        areatype:"mountains"
    },//west - east(to caves)
    8:{
        title:"Curving climbing plants dangle among the trees here.",
        exits:{north:false,south:true,east:true,west:false,northeast:false,southeast:false,northwest:false,southwest:false},
        areatype:"mountains"
    }, //south - east
    9:{
        title:"An ominous clearing.",
        exits:{north:true,south:false,east:false,west:false,northeast:false,southeast:true,northwest:false,southwest:false},
        areatype:"mountains"
        //north, southeast
    },
    10:{
        title:"A magical mushroom circle.",
        exits:{north:false,south:false,east:false,west:false,northeast:false,southeast:false,northwest:true,southwest:true},
        areatype:"mountains"
        //southwest, northwest
    },
    11:{
        title:"A cliff among the trees.",
        exits:{north:false,south:true,east:false,west:false,northeast:true,southeast:false,northwest:false,southwest:false},
        areatype:"mountains"
    },//south, northeast
    12:{
        title:"The edge of a cliff.",
        exits:{north:true,south:false,east:false,west:false,northeast:false,southeast:false,northwest:false,southwest:false},
        areatype:"mountains"
        //north
    }
}



/**Set up **/
const textOutput = document.getElementById("textOutput");
const textInput = document.getElementById("textInput");
const paragraph = document.createElement("p");
let username = "";
let character = {};
let stage = 1; //The stage dictates where in the storyline/storybuild the character is
let node = document.createTextNode('Welcome to The Game.');
paragraph.appendChild(node);
textOutput.appendChild(paragraph);
node = document.createTextNode("\nPlease insert a name.");
paragraph.appendChild(node);

//function to enter text into output and clear input textbox
textInput.addEventListener('keydown', (e)=>{
    if (e.code === "Enter") {
        const input = document.getElementById("textInput");
        textOutput.append(input.value + '\n');
        input.value = '';
    }
})

/** TODO
*Populate class list and abilities
*Attack timer - for gnome, for character
*populate weapon list
*populate gear
*populate enemies gnomes vs orcs
*populate areas - 2 areas, 5 rooms each, different types of enemies
**/

function action(e) {
    switch (stage) {
        case 1:
            if (e.code === "Enter") {
                const input = document.getElementById("textInput");
                textOutput.append("Hello " + input.value + '\nWhat is your class? \n Fighter, Cleric, Mage, Thief');
                character.name = input.value;
                input.value = '';
                stage=2;
            }
            break;
        case 2:
            if (e.code === "Enter") {   
                const input = document.getElementById("textInput");
                /** Build the character class. skills: description, damage.
                 * consider crit rate, damage per gear **/
                switch (input.value.toLowerCase()) {
                    case "mage":
                        character.class = "Mage";
                        character.skills = {
                            fire: {
                                description:"You mumble under your lips as fire flies from your pointed finger at your target.",
                                damage:10
                            },
                            water: {
                                description:"Your arm begins to tremble as water flies from your pointed finger at your target.",
                                damage:10
                            },
                            air: {
                                description:"Wind rips into your target as you scream at them.",
                                damage:10
                            }
                          };
                          stage=3;
                    break;
                    case "thief":
                    character.skills = {    
                        pickpocket: {
                            description:"You brush your arm across your target as you bump into them slightly, retrieving an object.",
                            damage:0
                        },
                        backstab: {
                            description:"Sliding behind your target you quickly jab you knife through their back.",
                            damage:10
                        },
                        throw: {
                            description:"You throw " + character.leftHand + " at a your target.",
                            damage:0 //the damage is dependent on the item thrown
                        }
                    };
                        stage=3;
                        break;
                    case "fighter":
                        stage=3;
                        break;
                    case "cleric":
                        stage=3;
                        break;
                        default:
                            textOutput.append('\nWhat is your class? \n Fighter, Cleric, Mage, Thief');
                            stage=2;
                            break;
                }               
                input.value = '';
                character.leftHand = "nothing";
                character.rightHand = "nothing";
                character.inventory = "Empty";
                character.clothes = "You are naked.";
                character.balance = true;
                character.age = 18;
                character.roomID = 1;
                character.health = 100;
                character.mana = 100;
            }
            break;
        case 3:
            textOutput.append("Welcome " + character.name + ". You are a " + character.class + 
                " and are " + character.age + " years old. You are wielding "
                + character.leftHand + " in your left hand. You are wielding " + character.rightHand + 
                " in your right hand.");
                stage=4;
            break;
        default:
            switch(input.value.toLowerCase()) {
                case "look": 
                case "east":
            }
            break;
            
            
     }
}