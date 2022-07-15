//Constants

const defaultTip = 15; //Good practice to tip at least 15%
const largeParty = 20; //Frequently required to charge at least 20% for parties of 6 or more

//Initialize Element-bound Variables

function getValue(object){
    return object.value;
}
//Initialize Price Catcher
let price = document.querySelector('#price');
let priceValue =price.value;

function priceUpdater(events){
    priceValue =  parseInt(this.value); 
}

price.addEventListener('change', priceUpdater);

//Value of Price now logged in priceValue


//########################################################


//Initialize NumPeople Catcher


let numPeople = document.querySelector('#numPeople');
let numPeopleValue = numPeople.value

function numPeopleUpdater(events){
    numPeopleValue = parseInt(this.value);
}


numPeople.addEventListener('change', numPeopleUpdater);
//Value of numPeople now logged in numPeopleValue

//########################################################

//Initialize Sliders + Variables for Input Functions
let slider1 = document.querySelector('#customRange1');
let slider2 = document.querySelector('#customRange2');
let slider3 = document.querySelector('#customRange3');
let slider4 = document.querySelector('#customRange4');
let slider5 = document.querySelector('#customRange5');
let checkbox = document.querySelector('#flexCheckChecked');

let waitTime = slider2.value;
let serviceQual = slider3.value;
let clean = slider4.value;
let food = slider1.value;
let ambience = slider5.value;
let averagePoints;
let tip;
let checkboxChecked;

//########################################################

//Initialize event listeners for all sliders


let updateSliders = function(e,rateNumber){
    let h1Label = ".slider"+rateNumber+" h1" //Create a string corresponding to the slider with associated h1
    let rating = document.querySelector(h1Label); //initialize rating variable based on h1Label
    rating.innerHTML = e; //set innerhtml of custom slider to the new event value
}

slider1.addEventListener('change', () => {updateSliders(slider1.value,1)},false); 
slider2.addEventListener('change', () => {updateSliders(slider2.value,2)},false); 
slider3.addEventListener('change', () => {updateSliders(slider3.value,3)},false); 
slider4.addEventListener('change', () => {updateSliders(slider4.value,4)},false); 
slider5.addEventListener('change', () => {updateSliders(slider5.value,5)},false); 
checkbox.addEventListener('click', function(events){
    checkboxChecked = checkbox.checked;
},false); //checking if checkbox is checked in form of boolean

//########################################################

//Initialize Button for Calculations

let button = document.querySelector('.button-submit button').addEventListener('click',buttonCalculate);

//########################################################

//Initialize Functions

function average(arr){
    return arr.reduce((a, b) => a + b, 0) / arr.length;
} //avgs an array of size n

function calculateTip(priceValue, numPeopleValue, averagePoints, recommend) {
    //avg points is from 0-10 - we need to make it from -5 to 5
    convertedAvg = averagePoints - 5;
    if (recommend === true) {convertedAvg+=2.5}; //add extra 2.5% if you would recommend to friends
    if (numPeopleValue>= 6) {
        tip = largeParty+convertedAvg;
        return tip;
    }
    else{
        tip = defaultTip+convertedAvg;
        return tip;
    }

}

function buttonCalculate() {
    //Store Args into variables
    waitTime = parseInt(slider2.value);
    serviceQual =  parseInt(slider3.value);
    clean =  parseInt(slider4.value);
    food =  parseInt(slider1.value);
    ambience =  parseInt(slider5.value);
    checkboxChecked = checkbox.checked;

    //Store scores into array
    arr = [waitTime,serviceQual,clean,food,ambience];

    //Calculate Average # of Points From Sliders
    averagePoints = average(arr);

    //Calculate Tip from Average Point, Number of People, and Total Price
    tip = calculateTip(priceValue,numPeopleValue,averagePoints,checkboxChecked);    //Stores tip as an integer
    tippedTotal = priceValue*((tip/100)+1); //Stores total with tip included

    document.querySelector('#tip').innerHTML="Your tip is: "+tip+"%";
    document.querySelector('#total').innerHTML="Your total is: $"+parseFloat(tippedTotal).toFixed(2);
}



 