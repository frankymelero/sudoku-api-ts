
import { Router } from "express";
import { router as authRouter } from "./auth";
import { router as sudokuRouter } from "./sudoku";

const router = Router();
const API_VERSION:string = "/api/v1/";

router.get("/", (req, res) => {
    res.send("Bienvenido a la API de SUDOKU. Mensaje por escribir.");
  });
  
// Rutas para la autenticación
router.use(`${API_VERSION}auth`, authRouter);

// Rutas para sudoku
router.use(`${API_VERSION}sudoku`, sudokuRouter);

export { router };