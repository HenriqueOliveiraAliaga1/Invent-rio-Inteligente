import express from "express";
import produtosRouter from "./routes/produtos.js";

const app = express(); // apenas 1 vez
app.use(express.json());

app.get("/health", (req, res) => {
  res.send("Backend rodando ✅");
});

app.use("/produtos", produtosRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🚀 Servidor rodando na porta ${port}`);
});
