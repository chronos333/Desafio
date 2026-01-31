const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());
app.use(express.static("public"));

app.post("/tarefas", (req, res) => {
  const novaTarefa = req.body;

  const tarefas = JSON.parse(
    fs.readFileSync("tarefas.json", "utf8")
  );

  tarefas.push(novaTarefa);

  fs.writeFileSync(
    "tarefas.json",
    JSON.stringify(tarefas, null, 2)
  );

  res.json({ status: "salvo" });
});

app.get("/tarefas", (req, res) => {
  const tarefas = JSON.parse(
    fs.readFileSync("tarefas.json", "utf8")
  );

  res.json(tarefas);
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
