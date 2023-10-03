import { Router } from "express";
import { addSudoku, deleteSudoku, getAllSudokus, getSudoku, updateSudoku } from "../controllers/sudoku.controller";
import { checkJwt } from "../middlewares/session";

const router = Router();

router.get('/get-all',getAllSudokus);
router.get('/:id', getSudoku);
router.post('/add', checkJwt, addSudoku);
router.put('/:id', checkJwt, updateSudoku);
router.delete('/:id', checkJwt, deleteSudoku);

export { router };

