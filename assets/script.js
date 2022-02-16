// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Avery Coad"

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')

// Code to update name display
credit.textContent = `Created by ${yourName}`

// // Event listener for clicks on the "+" button for Gingerbread cookies
// gbPlusBtn.addEventListener('click', function() {

// // HINT: You can delete this console.log after you no longer need it!
// console.log('Gingerbread + button was clicked!')

// // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
// })

// TODO: Hook up event listeners for the rest of the buttons

const gbaddBtn = document.querySelector('#add-gb');
let gbQty = document.querySelector('#qty-gb');
let total = document.querySelector("#qty-total")

const

const ccaddBtn = document.querySelector('#add-cc');
let ccQty = document.querySelector('#qty-cc');


const sugaraddBtn = document.querySelector('#add-sugar');
let sugarQty = document.querySelector('#qty-sugar');



// Event Listner 
gbaddBtn.addEventListener('click', () =>{
    console.log(gb)
    gb =gb +1;
    gbQty.textContent = gb;
    total.textContent = gb + cc + sugar;
});
ccaddBtn.addEventListener('click', () =>{
    console.log(cc)
    cc =cc +1;
    ccQty.textContent = cc
    total.textContent = cc + gb + sugar;
});
sugaraddBtn.addEventListener('click', () =>{
    console.log(sugar)
    sugar =sugar +1;
    sugarQty.textContent = sugar
    total.textContent = sugar + gb + cc;
});