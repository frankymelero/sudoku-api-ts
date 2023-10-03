import { Router } from "express";
import { addSudoku, deleteSudoku, getAllSudokus, getSudoku, updateSudoku } from "../controllers/sudoku.controller";
import { logMiddleware } from "../middlewares/log";

const router = Router();

router.get('/get-all',getAllSudokus);
router.get('/:id', getSudoku);
router.post('/add', addSudoku);
router.put('/:id', updateSudoku);
router.delete('/:id', deleteSudoku);

export { router };

