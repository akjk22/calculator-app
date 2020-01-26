// BUSINESS (BACK END) LOGIC

// function add(number1, number2) {
//     return number1 + number2;
//   };
// CAN ALSO BE WRITTEN LIKE THIS
  var add = function(number1, number2) {
    return number1 + number2;
  };
// function subtract(number1, number2) {
//   return number1 - number2;
// };
var subtract = function(number1, number2) {
  return number1 - number2;
};
// function multiply(number1, number2) {
//   return number1 * number2;
// };
var multiply = function(number1, number2) {
  return number1 * number2;
};
// function divide(number1, number2) {
//   return number1 / number2;
// };
var divide = function(number1, number2) {
  return number1 / number2;
};
function calculateBMI(heightCM, weightKG) {
  return (weightKG/(heightCM*heightCM));
}

function convertCelsius(celsius) {
    return ((celsius*9/5) + 32);
}

function convertFahrenheit(fahrenheit) {
    return ((fahrenheit-32) * 5/9);
}

function convertGallonsToLiters(gallons) {
    return (parseInt(gallons) * 3.785411784);
}

// let gallons = prompt("Enter gallons");
// alert(convertGallonsToLiters(gallons));

// heightCM = parseInt(prompt("Enter height in CM"));
// weightKG = parseInt(prompt("Enter weight in KG"));
// alert(calculateBMI(heightCM,weightKG));

// celsius = parseInt(prompt("Enter degrees celsius"))
// alert(convertCelsius(celsius));

// fahrenheit = parseInt(prompt("Enter degrees fahrenheit"))
// alert(convertFahrenheit(fahrenheit));


// EVERYTHING BELOW THIS IS FRONT-END OR USER INTERFACE LOGIC

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#output").text(result);
  });
});
