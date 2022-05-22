let numToConvert = document.getElementById('num-to-convert')
let metersToFeet = document.getElementById('meters-to-feet')
let feetToMeters = document.getElementById('feet-to-meters')
let litersToGallons = document.getElementById('liters-to-gallons')
let gallonsToLiters = document.getElementById('gallons-to-liters')
let kilosToPounds = document.getElementById('kilos-to-pounds')
let poundsToKilos = document.getElementById('pounds-to-kilos')
let inputNumber = document.getElementById('input-number')



function convert(){
  numToConvert.textContent = inputNumber.value;
  toFeet()
  toMeters()
  toGallons()
  toLiters()
  toKilos()
  toPounds()
}


function toFeet(){
    const conversionRate = 3.28084;
    let result = conversionRate * numToConvert.textContent;
    metersToFeet.textContent = numToConvert.textContent + " meters = " + result.toFixed(3) + " feet | "
}


function toMeters(){
    const conversionRate = 0.3048;
    let result = conversionRate * numToConvert.textContent;
    feetToMeters.textContent = numToConvert.textContent + " feet = " + result.toFixed(3) + " meters"
}


function toGallons(){
    const conversionRate = 0.264172;
    let result = conversionRate * numToConvert.textContent;
     litersToGallons.textContent = numToConvert.textContent + " liters = " + result.toFixed(3) + " gallons | "
}




function toLiters(){
    const conversionRate = 3.78541;
    let result = conversionRate * numToConvert.textContent;
    gallonsToLiters.textContent = numToConvert.textContent + " gallons = " + result.toFixed(3) + " liters"
}




function toPounds(){
    const conversionRate = 2.20462;
    let result = conversionRate * numToConvert.textContent;
    kilosToPounds.textContent = numToConvert.textContent + " kilos = " + result.toFixed(3) + " pounds | "
}



function toKilos(){
    const conversionRate = 0.453592;
    let result = conversionRate * numToConvert.textContent;
    poundsToKilos.textContent = numToConvert.textContent + " pounds = " + result.toFixed(3) + " kilos"
}

