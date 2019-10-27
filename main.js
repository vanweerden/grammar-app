// TO TO
// display score under profile

// add hint (if they use hint, they don't get a check)
// green check: got without hint
// orange check: got with hint
//


const sentences = [
  {
    before: "I",
    cloze: ["have been learning", "'ve been learning"],
    after: "English for five years.",
    hint: "learn",
    tag: "present perfect"
  },
  {
    before: "She",
    cloze: ["has never seen", "'s never seen"],
    after: "snow.",
    hint: "never see",
    tag: "present perfect"
  },
  {
    before: "Andrew",
    cloze: ["has seen", "'s seen"],
    after: "Harry Potter five times.",
    hint: "see",
    tag: "present perfect"
  },
  {
    before: "They",
    cloze: ["have known", "'ve known"],
    after: "each other for five years.",
    hint: "know",
    tag: "present perfect"
  },
  {
    before: "The car",
    cloze: ["has been washed", "'s been washed"],
    after: ". It is clean now.",
    hint: "wash",
    tag: "present perfect"
  },
  {
    before: "John",
    cloze: ["has been acting", "'s been acting"],
    after: "suspicious lately.",
    hint: "act",
    tag: "present perfect"
  },
  {
    before: "Alice's eyes are red because she",
    cloze: ["has been crying", "'s been crying"],
    after: ".",
    hint: "cry",
    tag: "present perfect"
  },
  {
    before: "I",
    cloze: ["haven't been reading", "have not been reading"],
    after: "very much lately.",
    hint: "not read",
    tag: "present perfect"
  }
];

// Generates list of clozed sentences with unique id
(function populateList() {
  // variables for for loop
  var node;
  var input;
  var before;
  var after;
  var checkbox;

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
    input.setAttribute("placeholder", "(" + sentences[i].hint + ")");
    input.setAttribute("maxlength", "20");

    // Create checkbox
    checkbox = document.createElement("SPAN");
    checkbox.innerHTML = " ";
    checkbox.setAttribute("id", `checkbox-${i}`);

    // Create text bits
    before = document.createTextNode(sentences[i].before
    + " ");
    after = document.createTextNode(" " + sentences[i].after);

    // Appends everything to <li> before appending <li> to <ul>
    node.appendChild(checkbox);
    node.appendChild(before);
    node.appendChild(input);
    node.appendChild(after);
    document.querySelector(".sentence-list").appendChild(node);
  }
})();

// Grabs all answer input fields
const clozeInput = [...document.querySelectorAll('.cloze')];

// Grabs all input into array and checks each one
function checkAnswers(answers) {
  // Get all input into array
  const userInput = [];
  for (let i = 0; i < clozeInput.length; i++) {
    userInput.push(clozeInput[i].value);
  }

  // Check input against answers in object
  for (let i = 0; i < clozeInput.length; i++) {
    if (sentences[i].cloze.includes(userInput[i])) {
      tickBox(i);
    } else {
      exBox(i);
    }
  }
}

// Bring button alive; passes all .cloze input fields as argument
(function eventListener() {
  document.getElementById("btn").addEventListener("click",
    function() {
      checkAnswers(clozeInput);
    }
  );
})();

// Passes i (sentence number) to num to grab correct checkbox
function tickBox(num) {
  document.getElementById(`checkbox-${num}`).innerHTML = "✓ ";
  document.getElementById(`checkbox-${num}`).style.color = "#468CC1";
}

function exBox(num) {
  document.getElementById(`checkbox-${num}`).innerHTML = "× ";
  document.getElementById(`checkbox-${num}`).style.color = "#FF8351";
}
