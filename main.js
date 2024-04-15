// Chess Quiz

// Marking Button Event Listener
document.getElementById("mark-btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Variables
  let q1 = document.getElementById("q1-in").value.toLowerCase();
  let q2 = document.getElementById("q2-in").value.toLowerCase();
  let q3 = +document.getElementById("q3-in").value;
  let q4 = document.getElementById("q4-in").value.toLowerCase();
  let answer1 = document.getElementById("answer1");
  let answer2 = document.getElementById("answer2");
  let answer3 = document.getElementById("answer3");
  let answer4 = document.getElementById("answer4");
  let evaluation = document.getElementById("evaluation");
  let response = document.getElementById("response");
  let score = 0;

  // Individual Questions
  if (q1 === "king") {
    answer1.innerHTML = "Correct";
    answer1.style.color = "green";
    document.getElementById("q1-in").style.borderBlockColor = "green";
    score++;
  } else {
    answer1.innerHTML = "Incorrect";
    answer1.style.color = "red";
    document.getElementById("q1-in").style.borderBlockColor = "red";
  }

  if (q2 === "queen") {
    answer2.innerHTML = "Correct";
    answer2.style.color = "green";
    document.getElementById("q2-in").style.borderBlockColor = "green";
    score++;
  } else {
    answer2.innerHTML = "Incorrect";
    answer2.style.color = "red";
    document.getElementById("q2-in").style.borderBlockColor = "red";
  }

  if (q3 === 64) {
    answer3.innerHTML = "Correct";
    answer3.style.color = "green";
    document.getElementById("q3-in").style.borderBlockColor = "green";
    score++;
  } else {
    answer3.innerHTML = "Incorrect";
    answer3.style.color = "red";
    document.getElementById("q3-in").style.borderBlockColor = "red";
  }

  if (q4 === "queen" || q4 === "rook" || q4 === "bishop" || q4 === "knight") {
    answer4.innerHTML = "Correct";
    answer4.style.color = "green";
    document.getElementById("q4-in").style.borderBlockColor = "green";
    score++;
  } else {
    answer4.innerHTML = "Incorrect";
    answer4.style.color = "red";
    document.getElementById("q4-in").style.borderBlockColor = "red";
  }

  // Evaluation (Score and Response)
  if (score === 1) {
    evaluation.innerHTML = `${score}/4 (25%)`;
    response.innerHTML = "Nice effort!";
  } else if (score === 2) {
    evaluation.innerHTML = `${score}/4 (50%)`;
    response.innerHTML = "Halfway there!";
  } else if (score === 3) {
    evaluation.innerHTML = `${score}/4 (75%)`;
    response.innerHTML = "Great job!";
  } else if (score === 4) {
    evaluation.innerHTML = `${score}/4 (100%)`;
    response.innerHTML = "Wow, you are a chess master!";
  } else {
    evaluation.innerHTML = `${score}/4 (0%)`;
    response.innerHTML = "Try Again!";
  }
}
