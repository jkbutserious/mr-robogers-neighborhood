// User Interface Logic
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const userNumber = parseInt($("input#user-number").val());
    const userName = $("input#user-name").val();
    $("#output").show();
    // $("#robo-response").text("");
    $("#robo-response").text(roboResponse(userNumber, userName));
  });

  $("#reverse-button").click(function() {
    const roboInput = ($("#robo-response").text()).split(" ");
    $("#robo-response").text(roboReverse(roboInput));
  });
});

// Business Logic
const roboResponse = function (number, name) {
  let numberSequence = "";
  const numberArray = [];

  for (i = 0; i <= number; i++) {
    numberArray[i] = i;
    if (numberArray[i] % 3 === 0 && numberArray[i] != 0) {
      numberArray[i] = "Won't you be my neighbor, " + name + "?";
      }
    else if ((numberArray[i]).toString().match(/3/) != null) {
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
const roboReverse = function (splitString) {
  let roboOutput = "";
  for (i = splitString.length - 1; i >= 0; i--) {
    roboOutput = roboOutput + " " + splitString[i];
  }
  return roboOutput;
}