"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomSudokusByDifficulty = exports.getSudokusByDifficulty = exports.getRandomSudoku = exports.deleteSudoku = exports.addSudoku = exports.updateSudoku = exports.getAllSudokus = exports.getSudoku = void 0;
const error_handle_1 = require("../utils/error.handle");
const sudoku_service_1 = require("../services/sudoku.service");
const getSudoku = ({ params }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = params;
        const response = yield (0, sudoku_service_1.getOneById)(id);
        const data = response ? response : "NOT_FOUND";
        res.send(data);
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_GET_SUDOKU');
    }
});
exports.getSudoku = getSudoku;
const getAllSudokus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, sudoku_service_1.getSudokus)();
        res.send(response);
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_GET_ALL_SUDOKUS');
    }
});
exports.getAllSudokus = getAllSudokus;
const getRandomSudoku = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const responseG = yield (0, sudoku_service_1.getRandom)();
        res.send(responseG);
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_GETTING_RANDOM_SUDOKU');
    }
});
exports.getRandomSudoku = getRandomSudoku;
const getSudokusByDifficulty = ({ params }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { difficulty } = params;
        console.log("hola");
        const response = yield (0, sudoku_service_1.getSudokusDifficulty)(difficulty);
        const data = response ? response : "NOT_FOUND";
        res.send(data);
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_GET_SUDOKU_BY_DIFFICULTY');
    }
});
exports.getSudokusByDifficulty = getSudokusByDifficulty;
const getRandomSudokusByDifficulty = ({ params }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { difficulty } = params;
        const response = yield (0, sudoku_service_1.getRandomByDifficulty)(difficulty);
        const data = response ? response : "NOT_FOUND";
        res.send(data);
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_GET_RANDOM_SUDOKU_BY_DIFFICULTY');
    }
});
exports.getRandomSudokusByDifficulty = getRandomSudokusByDifficulty;
const updateSudoku = ({ params, body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = params;
        const responseGetOne = yield (0, sudoku_service_1.updateSudokuById)(id, body);
        res.send(responseGetOne);
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_UPDATE_SUDOKU');
    }
});
exports.updateSudoku = updateSudoku;
const addSudoku = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const responseSudoku = yield (0, sudoku_service_1.insertSudoku)(body);
        res.send(responseSudoku);
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_POST_SUDOKU', error);
    }
});
exports.addSudoku = addSudoku;
const deleteSudoku = ({ params }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = params;
        const responseGetOne = yield (0, sudoku_service_1.deleteSudokuById)(id);
        res.send(responseGetOne);
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_DELETE_SUDOKU');
    }
});
exports.deleteSudoku = deleteSudoku;
