"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const sudoku_controller_1 = require("../controllers/sudoku.controller");
const session_1 = require("../middlewares/session");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/get-all', sudoku_controller_1.getAllSudokus);
router.get('/get-random', sudoku_controller_1.getRandomSudoku);
router.get('/get-by-difficulty/:difficulty', sudoku_controller_1.getSudokusByDifficulty);
router.get('/get-random-by-difficulty/:difficulty', sudoku_controller_1.getRandomSudokusByDifficulty);
router.get('/get-one/:id', sudoku_controller_1.getSudoku);
router.post('/add', session_1.checkJwt, sudoku_controller_1.addSudoku);
router.put('/:id', session_1.checkJwt, sudoku_controller_1.updateSudoku);
router.delete('/:id', session_1.checkJwt, sudoku_controller_1.deleteSudoku);
//# sourceMappingURL=sudoku.js.map