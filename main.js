function appendOperation(operation){
  document.getElementById('resultArea').innerHTML += operation;
}

function calcResult(){
  let container = document.getElementById('resultArea');
  let result =  eval(container.innerHTML);
  container.innerHTML = result;
}

function clearOperation(){
  document.getElementById('resultArea').innerHTML = '';
}