let num1 = 8;
let num2 = 2;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

let add = () => {
  let result = num1 + num2;
  document.getElementById("sum-el").textContent = "Sum: " + result;
  //   sum.textContent += "Sum: " + result;
};

let subtract = () => {
  let result = num1 - num2;
  document.getElementById("sum-el").textContent = "Sum: " + result;
};

let divide = () => {
  let result = num1 / num2;
  document.getElementById("sum-el").textContent = "Sum: " + result;
};

let multiply = () => {
  let result = num1 * num2;
  document.getElementById("sum-el").textContent = "Sum: " + result;
};
