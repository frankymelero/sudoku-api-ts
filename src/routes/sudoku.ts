import { Router } from "express";
import { addSudoku, deleteSudoku, getAllSudokus, getSudoku, updateSudoku, getRandomSudoku, getSudokusByDifficulty, getRandomSudokusByDifficulty} from "../controllers/sudoku.controller";
import { checkJwt } from "../middlewares/session";

const router = Router();

router.get('/get-all', getAllSudokus);
router.get('/get-random', getRandomSudoku);
router.get('/get-by-difficulty/:difficulty', getSudokusByDifficulty);
router.get('/get-random-by-difficulty/:difficulty', getRandomSudokusByDifficulty);
router.get('/get-one/:id', getSudoku);

router.post('/add', checkJwt, addSudoku);
router.put('/:id', checkJwt, updateSudoku);
router.delete('/:id', checkJwt, deleteSudoku);

export { router };

