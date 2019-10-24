// TO SOLVE
// add form to each question
// grab input from each unique question using event listener for 'submit'
    // hitting enter or button
// access answer from array
// output check or x to unique question
// display base of verb to use
  //display as placeholder text? add base verb to answers array--make into object?

// Sub arr index matches input-number ID and checkbox ID
const answers = [
  ["have been learning", "'ve been learning"],
  ["has never seen", "'s never seen"],
  ["has read", "'s read"],
  ["have known", "'ve known"],
  ["has been crying", "'s been crying"],
  ["have had", "'ve had"],
  ["have seen", "'ve seen"],
  ["has been washed", "'s been washed"],
];

// Grabs all answer input fields
const clozeInput = [...document.querySelectorAll('.attempt')];

// Gives each input element a unique ID which matches answer subarray
(function numberInput() {
  for (let i = 0; i < clozeInput.length; i++) {
    clozeInput[i].setAttribute("data-sentence", i);
  }
})();

// Does the same to the checkboxes
(function numberCheckboxes() {
  const checkboxes = [...document.querySelectorAll('.checkbox')];

  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].setAttribute("id", "checkbox-" + i);
  }
})();

// Listen for input from user (need to loop through all elements)
(function inputHandler(e) {
  clozeInput.addEventListener('input', checkAnswer());
})();

function checkAnswer(ans) {
//   // Grab data-sentence value for sentence number
//   // if (answers[sentence number].includes(ans)) {
//   //   tickBox();
//   // } else {
//   //   exBox();
//   // }
}

function tickBox() {
  document.getElementsByClassName("checkbox").innerHTML = "[✓]";
  document.getElementsByClassName("checkbox").style.color = "#2776b3";
}

function exBox() {
  document.getElementsByClassName("checkbox").innerHTML = "[x]";
  document.getElementsByClassName("checkbox").style.color = "#FF662A";
}
