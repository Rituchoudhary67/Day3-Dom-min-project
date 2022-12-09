/*
    project Requirement:
    1. change the background color by generating random hex color by clicking a button
    2. display the hex color code on screen 
    3. add a button to copy the color code.

*/

const showData = document.querySelector("#para");
const changeBtn = document.querySelector(".change-color");
const copyBtn = document.querySelector(".copy-btn")


/*step2 :- create a function for btn name as hexcolor*/
function hexColor() {
    const red = Math.floor(Math.random() * 255);   
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
   

    document.body.style.background = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
    showData.innerText =  `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
    // console.log(showData.innerText)

    /* sub-step for applying functionality for copy btn*/
    copyBtn.addEventListener('click', function () {
        navigator.clipboard.writeText(showData.innerText);
    })
    
}

/*step1 :- add event listener on btn*/
changeBtn.addEventListener('click',hexColor)