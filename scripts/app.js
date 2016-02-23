
var basicOperation = document.getElementById("basic-calc");
var tripOperation = document.getElementById("trip-calc");
var bmiOperation = document.getElementById("bmi-calc");
var mortgageOperation = document.getElementById("mortgage-calc");

var basicAnswer;
var basicNum1;
var basicNum2;
var basicSign;

var tripAnswer;
var tripDist;
var tripMPG;
var tripCost;
var tripSpeed;

var bmiAnswer;
var bmiMass;
var bmiHeight;

var mortgageAnswer;
var mortgageLoan;
var mortgageAPR;
var mortgageTerm;

basicOperation.addEventListener("click", function() {

  // Get the values when the button is clicked
  basicNum1 = parseFloat(document.getElementById("basic-num-1").value);
  basicNum2 = parseFloat(document.getElementById("basic-num-2").value);
  basicSign = document.getElementById("basic-operation").value;


  // operation
  switch (basicSign) {
    case "+":
        basicAnswer = basicNum1 + basicNum2;
        break;
    case "-":
        basicAnswer = basicNum1 - basicNum2;
        break;
    case "*":
        basicAnswer = basicNum1 * basicNum2;
        break;
    case "/":
        basicAnswer = basicNum1 / basicNum2;
        break;

  }

  // output the answer
  document.getElementById("basic-answer-alert").innerHTML = basicAnswer.toString();

});

tripOperation.addEventListener("click", function() {

  // Get the values when the button is clicked
  tripDist = parseFloat(document.getElementById("trip-distance").value);
  tripMPG = parseFloat(document.getElementById("trip-mpg").value);
  tripCost = parseFloat(document.getElementById("trip-cost").value);
  tripSpeed = parseFloat(document.getElementById("trip-speed").value);

  // operation
  if (tripSpeed < 60) {
        tripAnswer = tripDist / tripMPG * tripCost;
  } else {
        tripAnswer = tripDist / (tripMPG - 2*(tripSpeed - 60)) * tripCost;
  }

  // output the answer
  document.getElementById("trip-answer-alert").innerHTML = tripAnswer.toString();

});

bmiOperation.addEventListener("click", function() {

  // Get the values when the button is clicked
  bmiMass = parseFloat(document.getElementById("bmi-mass").value);
  bmiHeight = parseFloat(document.getElementById("bmi-height").value);

  // operation
  bmiAnswer = ( (bmiMass * 2.20462) / Math.pow((bmiHeight * 39.3701), 2) ) * 703;

  // output the answer
  document.getElementById("bmi-answer-alert").innerHTML = bmiAnswer.toString();

});

mortgageOperation.addEventListener("click", function() {

  // Get the values when the button is clicked
   mortgageLoan = parseFloat(document.getElementById("mortgage-loan").value);
  mortgageAPR = parseFloat(document.getElementById("mortgage-apr").value);
  mortgageTerm = parseFloat(document.getElementById("mortgage-term").value);


  // operation
  mortgageAnswer = mortgageLoan*(mortgageAPR/100)*Math.pow((1+mortgageAPR/100), mortgageTerm)/(Math.pow((1+mortgageAPR/100), mortgageTerm) - 1);

  console.log(mortgageAnswer);

  // restore the HTML in the header
  document.getElementById("mortgage-answer-alert").innerHTML = mortgageAnswer.toString();

});
