// TO TO
// create form with button at end
// change checkAnswer function to display ticks or exes beside sentence

// header is transparent!



const sentences = [
  {
    s: "I",
    v: ["have been learning", "'ve been learning"],
    o: "English for five years.",
    baseVerb: "learn",
    tag: "present perfect"
  },
  {
    s: "She",
    v: ["has never seen", "'s never seen"],
    o: "snow.",
    baseVerb: "see",
    tag: "present perfect"
  },
  {
    s: "Andrew",
    v: ["has seen", "'s seen"],
    o: "Harry Potter five times.",
    baseVerb: "see",
    tag: "present perfect"
  },
  {
    s: "They",
    v: ["have known", "'ve known"],
    o: "each other for five years.",
    baseVerb: "know",
    tag: "present perfect"
  },
  {
    s: "The car",
    v: ["has been washed", "'s been washed"],
    o: ". It is clean now.",
    baseVerb: "wash",
    tag: "present perfect"
  }
];

// Generates list of clozed sentences with unique id
(function populateList() {
  var node;
  var input;
  var subject;

  for (let i = 0; i < sentences.length; i++) {
    // Creates new <li> node and adds input field with unique id
    node = document.createElement("LI");
    node.setAttribute("id", `sentence-${i}`);

    // Creates new input box and sets attributes
    input = document.createElement("INPUT");
    input.type = "text";
    input.setAttribute("class", "cloze")
    input.setAttribute("id", `input-${i}`);
    input.setAttribute("name", `input-${i}`);
    input.setAttribute("placeholder", sentences[i].baseVerb);
    input.setAttribute("maxlength", "20");

    // Create text bits
    before = document.createTextNode(sentences[i].s
    + " ");
    after = document.createTextNode(" " + sentences[i].o);

    // Appends everything to <li>
    node.appendChild(before);
    node.appendChild(input);
    node.appendChild(after);
    document.querySelector(".sentence-list").appendChild(node);
  }
})();

// Grabs all answer input fields
const clozeInput = [...document.querySelectorAll('cloze')];

// i is the sentence number; plugs i into checkAnswer
(function eventHandler() {
  for (let i = 0; i < clozeInput.length; i++) {
    clozeInput[i].addEventListener('input', checkAnswer(i, ans));
  }
})();

// num is sentence number, passed from i in addEventListeners() function
function checkAnswer(ans) {
  if (answers[num].includes(ans)) {
    // tickBox();
    console.log("Correct!");
  } else {
    // exBox();
    console.log("Nope!");
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
