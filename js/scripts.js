// User Interface Logic
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    const userNumber = parseInt($("input#user-number").val());

    $("#robo-response").append(roboResponse(userNumber));
  });
});

// Business Logic
const roboResponse = function(number) {
  let numberSequence = "";
  const numberArray = [];

  for (i = 0; i < number; i++) {
    // if (numberArray[i] === 1) {
    //   numberArray[i] = "Beep!";
    // }
    numberArray[i] = i;
    numberSequence = numberSequence + " " + numberArray[i];
  }
  return numberSequence;
}
