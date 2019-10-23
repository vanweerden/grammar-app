// TO SOLVE
// grab input from each unique question
// listen for Enter being pushed OR button pushed
// access answer from array
// output check or x to unique question
// display base of verb to use


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

function checkAnswer(ans) {
  if (correct.includes(answers[number])) {
    tickBox();
  } else {
    exBox();
  }
}

function tickBox() {
  document.getElementsByClassName("checkbox").innerHTML = "[✓]";
  document.getElementsByClassName("checkbox").style.color = "#2776b3";
}

function exBox() {
  document.getElementsByClassName("checkbox").innerHTML = "[x]";
  document.getElementsByClassName("checkbox").style.color = "#FF662A";
}
