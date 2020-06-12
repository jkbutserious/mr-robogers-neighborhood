// User Interface Logic
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    const userNumber = $("input#user-number").val();

    $("#robo-response").append(roboResponse(userNumber));
  })
})

// Business Logic
let roboResponse = function(number) {
  return number
}
