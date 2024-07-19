const button = document.getElementById('button');
const meuInput = document.getElementById('meuInput');
const trash = document.getElementById('trash');
const list = document.getElementById('list');

function pegarValor() {
  const itemText = meuInput.value.trim();

  if (itemText !== "") {
    const li = document.createElement('li');
    li.textContent = itemText;
    li.addEventListener('click', function() {
      if (li.classList.contains('selected')) {
        li.classList.remove('selected');
      } else {
        const currentlySelected = document.querySelector('.selected');
        if (currentlySelected) {
          currentlySelected.classList.remove('selected');
        }
        li.classList.add('selected');
      }
    });
    list.appendChild(li);
    meuInput.value = "";
  }
}

button.addEventListener('click', pegarValor);
meuInput.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    button.click();
  }
});

trash.addEventListener('click', function() {
  const selectedLi = document.querySelector('.selected');
  if (selectedLi) {
    selectedLi.remove();
  }
});
