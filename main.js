const container = document.getElementById('resultArea');


function appendOperation(operation){
  container.innerHTML += operation;
}

function calcResult(){
  let result =  eval(container.innerHTML);
  container.innerHTML = result;
}

function clearOperation(){
  container.innerHTML = '';
}