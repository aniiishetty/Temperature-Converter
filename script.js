document.addEventListener("DOMContentLoaded", function() {
    const celsiusSection = document.getElementById("celsius");
    const fahrenheitSection = document.getElementById("fahrenheit");
    const kelvinSection = document.getElementById("kelvin");

    const celInput = document.getElementById("temp1");
    const farInput = document.getElementById("temp2");
    const kelInput = document.getElementById("temp3");

    const celRes = document.getElementById("celres");
    const fahRes = document.getElementById("fahres");
    const kelRes = document.getElementById("kelres");

    // Celsius to other units
    document.getElementById("far1").addEventListener("click", function() {
       
        const celsiusValue = parseFloat(celInput.value);
        const fahrenheitValue = (celsiusValue * 9/5) + 32;
        celRes.value = fahrenheitValue.toFixed(2);
    });

    document.getElementById("kel1").addEventListener("click", function() {
       
        const celsiusValue = parseFloat(celInput.value);
        const kelvinValue = celsiusValue + 273.15;
        celRes.value = kelvinValue.toFixed(2);
    });

    // Fahrenheit to other units
document.getElementById("cel2").addEventListener("click", function() {
    

    const fahrenheitValue = parseFloat(farInput.value);
    const celsiusValue = (fahrenheitValue - 32) * 5/9;
    fahRes.value = celsiusValue.toFixed(2);
});

document.getElementById("kel2").addEventListener("click", function() {
   
    const fahrenheitValue = parseFloat(farInput.value);
    const kelvinValue = celsiusValue + 273.15;
    fahRes.value = kelvinValue.toFixed(2);
});


    // Kelvin to other units
document.getElementById("far3").addEventListener("click", function() {
   

    const kelvinValue = parseFloat(kelInput.value);
    const fahrenheitValue = (kelvinValue - 273.15) * 9/5 + 32;
    kelRes.value = fahrenheitValue.toFixed(2);
});

document.getElementById("cel3").addEventListener("click", function() {
   
    const kelvinValue = parseFloat(kelInput.value);
    const celsiusValue = kelvinValue - 273.15;
    kelRes.value = celsiusValue.toFixed(2);
});

});
