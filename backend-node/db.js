import pkg from "pg";
import dotenv from "dotenv";

dotenv.config(); // carrega as variáveis do .env

const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }, // necessário pro Supabase
});

export default pool; // apenas 1 export default
