import express from "express";
import pool from "../db.js"; // sobe uma pasta pra acessar db.js

const router = express.Router();

// GET /produtos → lista todos os produtos
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM produtos");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao buscar produtos" });
  }
});

export default router;
