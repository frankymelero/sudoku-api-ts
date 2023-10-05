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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomByDifficulty = exports.getSudokusDifficulty = exports.getRandom = exports.deleteSudokuById = exports.updateSudokuById = exports.getOneById = exports.getSudokus = exports.insertSudoku = void 0;
const sudoku_model_1 = __importDefault(require("../models/sudoku.model"));
const insertSudoku = (sudoku) => __awaiter(void 0, void 0, void 0, function* () {
    const responseInsert = yield sudoku_model_1.default.create(sudoku);
    return responseInsert;
});
exports.insertSudoku = insertSudoku;
const getSudokus = () => __awaiter(void 0, void 0, void 0, function* () {
    const responseGetAll = yield sudoku_model_1.default.find({}).select('-createdAt -updatedAt');
    return responseGetAll;
});
exports.getSudokus = getSudokus;
const getRandom = () => __awaiter(void 0, void 0, void 0, function* () {
    const allSudokus = yield sudoku_model_1.default.find({}).select('-createdAt -updatedAt');
    const randomIndex = Math.floor(Math.random() * allSudokus.length);
    return allSudokus[randomIndex];
});
exports.getRandom = getRandom;
const getOneById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const responseGetOne = yield sudoku_model_1.default.findOne({ _id: id }).select('-createdAt -updatedAt');
    return responseGetOne;
});
exports.getOneById = getOneById;
const getSudokusDifficulty = (difficulty) => __awaiter(void 0, void 0, void 0, function* () {
    const responseGetbDifficulty = yield sudoku_model_1.default.find({ difficulty: difficulty }).select('-createdAt -updatedAt');
    return responseGetbDifficulty;
});
exports.getSudokusDifficulty = getSudokusDifficulty;
const getRandomByDifficulty = (difficulty) => __awaiter(void 0, void 0, void 0, function* () {
    const allsudokusbydifficulty = yield sudoku_model_1.default.find({ difficulty: difficulty }).select('-createdAt -updatedAt');
    const randomIdx = Math.floor(Math.random() * allsudokusbydifficulty.length);
    return allsudokusbydifficulty[randomIdx];
});
exports.getRandomByDifficulty = getRandomByDifficulty;
const updateSudokuById = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const responseUpdateOne = yield sudoku_model_1.default.findOneAndUpdate({ _id: id }, data, {
        new: true,
    });
    return responseUpdateOne;
});
exports.updateSudokuById = updateSudokuById;
const deleteSudokuById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const responseDeleteOne = yield sudoku_model_1.default.deleteOne({ _id: id });
    return responseDeleteOne;
});
exports.deleteSudokuById = deleteSudokuById;
//# sourceMappingURL=sudoku.service.js.map