var correct = ["have been learning", "'ve been learning"];

function checkAnswer(ans) {
  if (correct.includes(ans)) {
    tickBox();
  } else {
    exBox();
  }
}

function tickBox() {
  document.getElementById("checkbox").innerHTML = "[✓]";
}

function exBox() {
  document.getElementById("checkbox").innerHTML = "[x]";
}
