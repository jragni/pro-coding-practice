

const SIDE_A = document.getElementById("side-a")
const SIDE_B = document.getElementById("side-b")
/* Is size a valid integer 2-50? */
function validateEdge(size) {
  return (Number.isInteger(size) &&
      size >= 2 &&
      size <= 50);
}


/* Handle UI: get form data & update HTML */

function processForm(evt) {
  evt.preventDefault();
  let a = Number(SIDE_A.value);
  let b = Number(SIDE_B.value);

  let aOk = validateEdge(a);
  let bOk = validateEdge(b);

  let aMsg = aOk ? "" : "Invalid!";
  let bMsg = bOk ? "" : "Invalid!";

  let msg = ""
  if (aOk && bOk) {
    msg = generateMessage(a,b)
  }

  setMessages(aMsg, bMsg, msg);
}

function calculateArea(a, b){
  return a * b / 2;
}
function caclulateHypotenuse(a, b){
  return Math.round(Math.sqrt(a * a + b * b));
}

function generateMessage(a, b){
  let message = ""
  let area = calculateArea(a, b)
  let hypot = caclulateHypotenuse(a, b)
  message = `Hypotenuse is ${hypot} and area is ${area}.`;
    
  if (area > 50) {
    message += ` That's a really big triangle!`;
  }

  return message;

}

function setMessages(aMsg, bMsg, mainMsg){
  document.getElementById("a-msg").innerHTML = aMsg;
  document.getElementById("b-msg").innerHTML = bMsg;
  document.getElementById("msg").innerHTML = mainMsg;
}