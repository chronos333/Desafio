const btnAdicionar = document.getElementById("btnAdicionarTarefa");
const listaTarefas = document.getElementById("listaTarefas");

btnAdicionar.addEventListener("click", () => {
  const nome = document.getElementById("nomeTarefa").value;
  const descricao = document.getElementById("descricaoTarefa").value;
  const prioridade = document.getElementById("prioridadeTarefa").value;

  if (nome.trim() === "") {
    alert("Digite o nome da tarefa!");
    return;
  }

  // Criar card da tarefa
  const tarefa = document.createElement("div");
  tarefa.className = "card mb-3 shadow";

  tarefa.innerHTML = `
    <div class="card-body">
      <h5 class="card-title">${nome}</h5>
      <p class="card-text">${descricao}</p>
      <span class="badge bg-${corPrioridade(prioridade)} mb-2">
        Prioridade: ${prioridade}
      </span>
      <div class="mt-2">
        <button class="btn btn-success btn-sm concluir">Concluir</button>
        <button class="btn btn-danger btn-sm excluir">Excluir</button>
      </div>
    </div>
  `;

  listaTarefas.appendChild(tarefa);

  // Botão excluir
  tarefa.querySelector(".excluir").addEventListener("click", () => {
    tarefa.remove();
  });

  // Botão concluir
  tarefa.querySelector(".concluir").addEventListener("click", () => {
    tarefa.classList.toggle("opacity-50");
  });

  // Limpar campos
  document.getElementById("nomeTarefa").value = "";
  document.getElementById("descricaoTarefa").value = "";
  document.getElementById("prioridadeTarefa").value = "baixa";

  // Fechar modal
  const modal = bootstrap.Modal.getInstance(
    document.getElementById("modalTarefa")
  );
  modal.hide();
});

function corPrioridade(prioridade) {
  if (prioridade === "alta") return "danger";
  if (prioridade === "media") return "warning";
  return "success";
}
