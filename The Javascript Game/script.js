const textOutput = document.getElementById("textOutput");
const textInput = document.getElementById("textInput");
const paragraph = document.createElement("p");
let node = document.createTextNode('Welcome to The Game.');
paragraph.appendChild(node);
textOutput.appendChild(paragraph);
node = document.createTextNode("\nPlease insert a name.");
paragraph.appendChild(node);
let username = "";
let character = {};
let isNameSet = false;
let isClassSet = false;
textInput.addEventListener('keydown', (e)=>{
    if (e.code === "Enter") {
        const input = document.getElementById("textInput");
        textOutput.append(input.value + '\n');
        input.value = '';
    }
})

function action(e) {
    if (!isNameSet) {
        if (e.code === "Enter") {
            const input = document.getElementById("textInput");
            textOutput.append("Hello " + input.value + '\nWhat is your class? \n Fighter, Cleric, Mage, Thief');
            character.name = input.value;
            isNameSet = true;
            input.value = '';
        }
    }
   else if (!isClassSet) {
    const input = document.getElementById("textInput");
    character.class = input.value;
    isClassSet = true;
    input.value = '';
    character.leftHand = "nothing";
    character.rightHand = "nothing";
    character.inventory = "Empty";
    character.clothes = "You are naked.";
    character.age = 18;
    textOutput.append("Welcome " + character.name + ". You are a " + character.class + " and are " + character.age + " years old. You are wielding "
    + character.leftHand + " in your left hand. You are wielding " + character.rightHand + " in your right hand.");
} else {


        // if (e.code === "Enter") {
        //     const input = document.getElementById("textInput");

        //     if (input.value.toUpperCase() === "NAME") {

        //         textOutput.append(input.value + '\nYour name is: ' + username)

        //     }

        //     else {
        //         textOutput.append(input.value + '\n');
        //     }
        //     input.value = '';
        // }

     }
}