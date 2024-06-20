// Counter Program

const DecreaseBt = document.getElementById("DecreaseBt");
const IncreaseBt = document.getElementById("IncreaseBt");
const ResetBt = document.getElementById("ResetBt");
const CountLabel = document.getElementById("CountLabel");
let count = 0;

IncreaseBt.onclick = function () {
  count++;
  CountLabel.textContent = count;
};

DecreaseBt.onclick = function () {
  count--;
  CountLabel.textContent = count;
};

ResetBt.onclick = function () {
  count = 0;
  CountLabel.textContent = count;
};
