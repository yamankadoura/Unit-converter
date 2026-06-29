const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");

// Conversion multipliers
const meterToFeet = 3.281;
const literToGallon = 0.264;
const kiloToPound = 2.204;

convertBtn.addEventListener("click", convert);

// Enter key to trigger conversion
inputEl.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        convert();
    }
});

// Core Conversion Logic
function convert() {
    let baseValue = Number(inputEl.value);
    
    // Prevent NaN errors if input is empty
    if (isNaN(baseValue) || inputEl.value === "") {
        baseValue = 0;
    }

    // Length Conversion
    const feet = (baseValue * meterToFeet).toFixed(3);
    const meters = (baseValue / meterToFeet).toFixed(3);
    lengthEl.textContent = `${baseValue} meters = ${feet} feet | ${baseValue} feet = ${meters} meters`;

    // Volume Conversion
    const gallons = (baseValue * literToGallon).toFixed(3);
    const liters = (baseValue / literToGallon).toFixed(3);
    volumeEl.textContent = `${baseValue} liters = ${gallons} gallons | ${baseValue} gallons = ${liters} liters`;

    // Mass Conversion
    const pounds = (baseValue * kiloToPound).toFixed(3);
    const kilos = (baseValue / kiloToPound).toFixed(3);
    massEl.textContent = `${baseValue} kilos = ${pounds} pounds | ${baseValue} pounds = ${kilos} kilos`;
}

// Run once on load to populate initial values
convert();