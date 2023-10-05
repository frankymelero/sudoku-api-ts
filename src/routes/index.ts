
import { Router } from "express";
import path from "path";
import { router as authRouter } from "./auth";
import { router as sudokuRouter } from "./sudoku";

const router = Router();
const API_VERSION:string = "/api/v1/";

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "index.html"));
  });
  
// Rutas para la autenticación
router.use(`${API_VERSION}auth`, authRouter);

// Rutas para sudoku
router.use(`${API_VERSION}sudoku`, sudokuRouter);

router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "notfound.html"));
  });

export { router };