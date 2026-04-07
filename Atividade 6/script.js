const tarefaInput = document.getElementById("tarefaInput");
const adicionarBtn = document.getElementById("adicionarBtn");
const listaTarefas = document.getElementById("listaTarefas");

// Adicionar tarefa
adicionarBtn.addEventListener("click", function () {
  const textoTarefa = tarefaInput.value.trim();

  if (textoTarefa === "") {
    alert("Digite uma tarefa antes de adicionar.");
    return;
  }

  const novoItem = document.createElement("li");
  novoItem.textContent = textoTarefa;

  listaTarefas.appendChild(novoItem);

  tarefaInput.value = "";
  tarefaInput.focus();
});

// Remover tarefa com delegação de eventos
listaTarefas.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    event.target.remove();
  }
});