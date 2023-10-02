import { Router } from "express";
import { addSudoku, deleteSudoku, getAllSudokus, getSudoku, updateSudoku } from "../controllers/sudoku.controller";
import { logMiddleware } from "../middlewares/log";

const router = Router();

router.get('/get-all',getAllSudokus);
router.get('/:id', getSudoku);
router.post('/add', logMiddleware, addSudoku);
router.put('/:id', logMiddleware, updateSudoku);
router.delete('/:id', logMiddleware, deleteSudoku);

export { router };

