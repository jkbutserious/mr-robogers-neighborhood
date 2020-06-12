// User Interface Logic
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    const userNumber = $("input#user-number").val();

    $("#robo-response").append(roboResponse(userNumber));
  })
})

// Business Logic
const roboResponse = function(number) {
  const numberArray = number.split("");
  let numberSequence = "";

  for (i = 0; i < numberArray.length; i++) {
    numberSequence = numberSequence + " " + numberArray[i];
  }
  return numberSequence;
}
