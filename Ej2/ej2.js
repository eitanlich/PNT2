let array = [];

function addRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  array.push(randomNumber);
}

function showArray() {
  const arrayDisplay = document.getElementById("array-display");
  arrayDisplay.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    const listItem = document.createElement("li");
    listItem.innerText = array[i];
    arrayDisplay.appendChild(listItem);
  }
}

function sortArray() {
  array.sort(function(a, b) {
    return a - b;
  });
}

function validateNumber() {
  const inputNumber = parseInt(document.getElementById("number-input").value);
  if (array.includes(inputNumber)) {
    document.body.style.backgroundColor = "green";
  } else {
    document.body.style.backgroundColor = "red";
  }
}
