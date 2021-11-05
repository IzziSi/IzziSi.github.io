const textOutput = document.getElementById("textOutput");
const textInput = document.getElementById("textInput");
const paragraph = document.createElement("p");
let username = "";
let character = {};
let stage = 1;
let node = document.createTextNode('Welcome to The Game.');

paragraph.appendChild(node);
textOutput.appendChild(paragraph);
node = document.createTextNode("\nPlease insert a name.");
paragraph.appendChild(node);

textInput.addEventListener('keydown', (e)=>{
    if (e.code === "Enter") {
        const input = document.getElementById("textInput");
        textOutput.append(input.value + '\n');
        input.value = '';
    }
})

//Populate class list and abilities
//populate weapon list
//populate gear
//populate enemies
//populate mini-map
//populate areas - 2 areas, 5 rooms each, different types of enemies




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
                character.class = input.value;
                input.value = '';
                character.leftHand = "nothing";
                character.rightHand = "nothing";
                character.inventory = "Empty";
                character.clothes = "You are naked.";
                character.age = 18;
                textOutput.append("Welcome " + character.name + ". You are a " + character.class + 
                " and are " + character.age + " years old. You are wielding "
                + character.leftHand + " in your left hand. You are wielding " + character.rightHand + 
                " in your right hand.");
                stage=3;
            }
            break;
        case 3:
            
            break;
        
     }
}