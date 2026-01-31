const btn = document.getElementById("btnAdicionarTarefa");
const lista = document.getElementById("listaTarefas");

let tarefas = [];

document.addEventListener("DOMContentLoaded", () => {
  const dados = localStorage.getItem("tarefas");
  tarefas = dados ? JSON.parse(dados) : [];
  tarefas.forEach((t, i) => renderizar(t, i));
});

btn.addEventListener("click", () => {
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

  tarefas.push(tarefa);
  salvar();
  renderizar(tarefa, tarefas.length - 1);

  bootstrap.Modal.getInstance(modalTarefa).hide();
  limpar();
});

function salvar() {
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function renderizar(t, index) {
  const div = document.createElement("div");
  div.className = "card mb-2";

  div.innerHTML = `
    <div class="card-body">
      <h5>${t.nome}</h5>
      <p>${t.descricao || ""}</p>
      <span class="badge bg-${cor(t.prioridade)}">${t.prioridade}</span>
      <small class="d-block text-muted mt-1">${t.dataHora || ""}</small>

      <button class="btn btn-sm btn-danger mt-2">
        Excluir
      </button>
    </div>
  `;

  div.querySelector("button").onclick = () => {
    tarefas.splice(index, 1);
    salvar();
    lista.innerHTML = "";
    tarefas.forEach((t, i) => renderizar(t, i));
  };

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
// feat by: ghost7