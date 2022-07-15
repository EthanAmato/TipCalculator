//Initialize Element-bound Variables

function getValue(object){
    return object.value
}

let price = document.querySelector('#price').value

price.addEventListener('change', function(events){price.value = price.value;});

let numPeople = document.querySelector('#numPeople').addEventListener('change', function(events){
    let self = this;
    return self.value});


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

function qualityPoints(arr){
    return arr.reduce((a, b) => a + b, 0) / arr.length;
}

function calculateTip(price, numPeople, averagePoints) {
    //avg points is from 0-10 - we need to make it from -5 to 5
    convertedAvg = averagePoints - 5;
    console.log(convertedAvg);
}


let update = function(e,rateNumber){
    let h1Label = ".slider"+rateNumber+" h1" //Create a string corresponding to the slider with associated h1
    let rating = document.querySelector(h1Label); //initialize rating variable based on h1Label
    console.log(e);
    rating.innerHTML = e; //set innerhtml of custom slider to the new event value
    
    console.log(price,numPeople);

    waitTime = parseInt(slider2.value);
    serviceQual =  parseInt(slider3.value);
    clean =  parseInt(slider4.value);
    food =  parseInt(slider1.value);
    ambience =  parseInt(slider5.value);
    let arr = [waitTime,serviceQual,clean,food,ambience]

    console.log(price,numPeople);
    averagePoints = qualityPoints(arr);

    calculateTip(price,numPeople,averagePoints);

    console.log(averagePoints);
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


 