$(document).ready(function () {
  $("form#input").submit(function (event) {
    event.preventDefault();
    let countTo = parseInt($("#input1").val());
    let countBy = parseInt($("#input2").val());
    console.log(countTo, countBy);
    if (isNaN(countTo) || isNaN(countBy)) {
      const badAnswer = "Due to current technologies, we can only count by numers :( Please use real numbers.";
      $(".THIS IS WHERE I WILL PUT THE THING THAT WILL SHOW.... PLACEHOLDER").show();
      $("#bad-answer").show();
    }
    else {
      let output = [];
      for (let number = 0; number <= countTo; number += countBy) {
        output.push(number);
        console.log(number);
      };
    };
  });
});


// let total = 0;
// for (let currentNumber = 1; currentNumber <= 5; currentNumber += 1) {
//   total += currentNumber;
// }
// total