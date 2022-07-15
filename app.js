//Constants

const defaultTip = 15;
const largeParty = 20;
//Initialize Element-bound Variables

function getValue(object){
    return object.value;
}
//Initialize Price Catcher
let price = document.querySelector('#price');
let priceValue =price.value;
function priceUpdater(events){
    priceValue =  parseInt(price.value); 
    console.log(priceValue);
}

price.addEventListener('change', priceUpdater);

//Value of Price now logged in priceValue


//########################################################


//Initialize NumPeople Catcher
function numPeopleUpdater(events){
    priceValue = parseInt(price.value); 
    console.log(numPeopleValue);
}

let numPeople = document.querySelector('#numPeople');
let numPeopleValue = numPeople.value
function numPeopleUpdater(events){
    numPeopleValue = parseInt(numPeople.value); 
    console.log(numPeopleValue);
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

//########################################################

//Initialize Functions

function qualityPoints(arr){
    return arr.reduce((a, b) => a + b, 0) / arr.length;
} //avgs array

function calculateTip(priceValue, numPeopleValue, averagePoints) {
    //avg points is from 0-10 - we need to make it from -5 to 5
    convertedAvg = averagePoints - 5;
    if (numPeopleValue>= 6) {
        tip = largeParty+convertedAvg;
        console.log(tip)
        return [tip, priceValue];
    }
    else{
        tip = defaultTip+convertedAvg;
        console.log(tip)
        return [tip, priceValue];
    }

}


let update = function(e,rateNumber){
    console.log(priceValue)
    let h1Label = ".slider"+rateNumber+" h1" //Create a string corresponding to the slider with associated h1
    let rating = document.querySelector(h1Label); //initialize rating variable based on h1Label
    rating.innerHTML = e; //set innerhtml of custom slider to the new event value
    

    waitTime = parseInt(slider2.value);
    serviceQual =  parseInt(slider3.value);
    clean =  parseInt(slider4.value);
    food =  parseInt(slider1.value);
    ambience =  parseInt(slider5.value);
    let arr = [waitTime,serviceQual,clean,food,ambience]

    averagePoints = qualityPoints(arr);

    tipArray = calculateTip(priceValue,numPeopleValue,averagePoints);
    console.log(tipArray[0],tipArray[1]);
    tipPercent = tipArray[0]/100
    tippedTotal = tipArray[1]*(tipPercent+1)

    
    console.log(tipPercent,tippedTotal);
}

let checkboxChecked;

//Initialize event listeners for all sliders



slider1.addEventListener('change', () => {update(slider1.value,1)},false); 
slider2.addEventListener('change', () => {update(slider2.value,2)},false); 
slider3.addEventListener('change', () => {update(slider3.value,3)},false); 
slider4.addEventListener('change', () => {update(slider4.value,4)},false); 
slider5.addEventListener('change', () => {update(slider5.value,5)},false); 
checkbox.addEventListener('click', function(events){
    checkboxChecked = checkbox.checked;
},false); 


 