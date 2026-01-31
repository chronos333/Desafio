function banco() {
  const tarefa = {
    nome: document.getElementById("nomeTarefa").value,
    descricao: document.getElementById("descricaoTarefa").value,
    prioridade: document.getElementById("prioridadeTarefa").value,
    dataHora: document.getElementById("dataHoraTarefa").value
  };

  fetch("/tarefas", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(tarefa)
  })
  .then(res => res.json())
  .then(() => alert("Salvo no JSON!"));
}

