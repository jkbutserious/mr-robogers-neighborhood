// User Interface Logic
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const userNumber = parseInt($("input#user-number").val());
    $("#output").show();
    $("#robo-response").text("");
    $("#robo-response").append(roboResponse(userNumber));
  });
});

// Business Logic
const roboResponse = function(number) {
  let numberSequence = "";
  const numberArray = [];

  for (i = 0; i <= number; i++) {
    numberArray[i] = i;
    if ((numberArray[i]).toString().match(/3/) != null) {
      numberArray[i] = "Won't you be my neighbor?";
      }
    else if ((numberArray[i]).toString().match(/2/) != null) {
      numberArray[i] = "Boop!";
      }
    else if ((numberArray[i]).toString().match(/1/) != null) {
    numberArray[i] = "Beep!";
    }
    numberSequence = numberSequence + " " + numberArray[i];
  }
  return numberSequence;
}
