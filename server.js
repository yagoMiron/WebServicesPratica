const express = require("express");
const sequelize = require("./config/database");
const Tutorial = require("./models/Tutorial");

const app = express();
const PORT = 3000;

app.use(express.json());

sequelize.sync().then(() => {
  console.log("Banco de dados sincronizado");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/tutorials", async (req, res) => {
  try {
    const tutorial = await Tutorial.create(req.body);
    res.status(201).json(tutorial);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get("/tutorials", (req, res) => {});

app.get("/tutorials/:id", (req, res) => {});

app.put("/tutorials/:id", (req, res) => {});

app.patch("/tutorials/:id", (req, res) => {});

// DELETE /tutorials/:id - Deletar um produto
app.delete("/tutorials/:id", (req, res) => {});

// 6. Iniciando o Servidor
app.listen(PORT, () => {
  console.log(
    `Servidor rodando na porta ${PORT}. Acesse http://localhost:${PORT}/`
  );
});
