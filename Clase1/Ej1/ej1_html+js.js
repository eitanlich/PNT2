let counter = 0;

function increaseCounter() {
  counter++;
  document.getElementById("counter-display").innerHTML = counter;
}

function decreaseCounter() {
  counter--;
  document.getElementById("counter-display").innerHTML = counter;
}
