const inputElement = document.getElementById("input-field") 
const buttonElement = document.getElementById("submit-button") 
const ulElement = document.getElementById("todo-List")

console.log(inputElement.value);

buttonElement.addEventListener('click', function(){
  const li = document.createElement('li');
  li.textContent = inputElement.value;
  console.log(li);
  ulElement.appendChild(li);

  inputElement.value = '';
});
  
console.log()
