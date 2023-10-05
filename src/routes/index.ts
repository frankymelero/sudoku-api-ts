
import { Router } from "express";
import { router as authRouter } from "./auth";
import { router as sudokuRouter } from "./sudoku";

const router = Router();

// Rutas para la autenticación
router.use("/api/v1/auth", authRouter);

// Rutas para sudoku
router.use("/api/v1/sudoku", sudokuRouter);

export { router };