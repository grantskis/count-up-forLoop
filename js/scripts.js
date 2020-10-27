$(document).ready(function () {
  $("form#input").submit(function (event) {
    event.preventDefault();
    let countTo = parseInt($("#input1").val());
    let countBy = parseInt($("#input2").val());
    console.log(countTo, countBy);
    if (isNaN(countTo) || isNaN(countBy)) {
      $("#bad-answer").show();
    }
    else {
      $("#bad-answer").hide();
      let output = [];
      for (let number = 0; number <= countTo; number += countBy) {
        output.push(number);
        $("#output-answer").text(output);
      };
    };
  });
});