const btn = document.getElementById("btnAdicionarTarefa");
const lista = document.getElementById("listaTarefas");

document.addEventListener("DOMContentLoaded", carregarTarefas);

btn.addEventListener("click", async () => {
  const tarefa = {
    nome: nomeTarefa.value.trim(),
    descricao: descricaoTarefa.value.trim(),
    prioridade: prioridadeTarefa.value,
    dataHora: dataHoraTarefa.value
  };

  if (!tarefa.nome) {
    alert("Digite o nome");
    return;
  }

  await fetch("/tarefas", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(tarefa)
  });

  renderizar(tarefa);
  bootstrap.Modal.getInstance(modalTarefa).hide();
  limpar();
});

async function carregarTarefas() {
  const res = await fetch("/tarefas");
  const tarefas = await res.json();
  tarefas.forEach(renderizar);
}

function renderizar(t) {
  const div = document.createElement("div");
  div.className = "card mb-2";

  div.innerHTML = `
    <div class="card-body">
      <h5>${t.nome}</h5>
      <p>${t.descricao || ""}</p>
      <span class="badge bg-${cor(t.prioridade)}">${t.prioridade}</span>
      <small class="d-block text-muted mt-1">${t.dataHora || ""}</small>
    </div>
  `;

  lista.appendChild(div);
}

function cor(p) {
  if (p === "alta") return "danger";
  if (p === "media") return "warning";
  return "secondary";
}

function limpar() {
  nomeTarefa.value = "";
  descricaoTarefa.value = "";
  prioridadeTarefa.value = "baixa";
  dataHoraTarefa.value = "";
}
