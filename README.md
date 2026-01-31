
---
# 📝 Gerenciador de Tarefas (To-Do List)

Um projeto simples de **gerenciamento de tarefas** feito com **HTML, CSS (Bootstrap) e JavaScript puro**, focado em funcionamento 100% no navegador, **sem backend**.

As tarefas são salvas localmente usando **localStorage**, garantindo que **não se percam ao recarregar a página**.

---

## 🚀 Funcionalidades

* ✅ Adicionar tarefas
* 🗑️ Excluir tarefas
* 🎯 Definir prioridade (baixa, média, alta)
* ⏰ Definir data e hora
* 💾 Salvamento automático no `localStorage`
* 🔄 Persistência dos dados ao recarregar a página

---

## 🛠️ Tecnologias utilizadas

* HTML5
* CSS3
* Bootstrap
* JavaScript (Vanilla JS)
* localStorage

---

## 📂 Estrutura do projeto

```
Desafio/
├── vscode/
│   └── public/
│       ├── index.html
│       ├── style.css
│       └── app.js
```

> 📌 Toda a lógica do projeto está concentrada no arquivo **`app.js`**.

---

## ▶️ Como executar o projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```

2. Acesse a pasta do projeto:

   ```bash
   cd Desafio/vscode/public
   ```

3. Abra o arquivo `index.html` no navegador
   *(não é necessário servidor ou backend)*

---

## 🧠 Como funciona o salvamento

As tarefas são armazenadas no navegador usando:

```js
localStorage.setItem("tarefas", JSON.stringify(tarefas));
```

E carregadas automaticamente quando a página é aberta:

```js
JSON.parse(localStorage.getItem("tarefas"));
```

---

## 📌 Melhorias futuras (opcional)

* ✏️ Editar tarefas
* 🆔 Gerar ID único para cada tarefa
* 🔍 Filtro por prioridade
* 🌙 Modo escuro
* 🌐 Integração com backend (Node.js + Express)

---

## 📄 Licença

Este projeto é livre para uso e modificação para fins de estudo e aprendizado.

---