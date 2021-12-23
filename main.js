function calculation() {
  let result;
  let firstNumber = Number(document.getElementById('firstNumber').value);
  let secondNumber = Number(document.getElementById('secondNumber').value);
  let select = document.getElementById('select').value;
  switch (select) {
    case '+':
      result = firstNumber + secondNumber;
      break;
    case '-':
      result = firstNumber - secondNumber;
      break;
    case '*':
      result = firstNumber * secondNumber;
      break;
    case '/':
      result = firstNumber / secondNumber;
      break;
  }
  document.getElementById('result').innerHTML = Math.round(result);
}
