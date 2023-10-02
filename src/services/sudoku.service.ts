import { Sudoku } from "../interfaces/sudoku.interface";
import sudokuModel from "../models/sudoku.model";

const insertSudoku = async(sudoku: Sudoku) => {
    const responseInsert = await sudokuModel.create(sudoku);
    return responseInsert;
}
const getSudokus = async() =>{
    const responseGetAll = await sudokuModel.find({});
    return responseGetAll;
}
const getOneById = async(id:string) => {
    const responseGetOne = await sudokuModel.findOne({_id:id});
    return responseGetOne;
}
const updateSudokuById = async(id:string, data: Sudoku) => {
    const responseUpdateOne = await sudokuModel.findOneAndUpdate({ _id:id }, data, {
        new: true,
    })
    return responseUpdateOne;
}

const deleteSudokuById = async (id: string) => {
    const responseDeleteOne = await sudokuModel.deleteOne({ _id: id });
    return responseDeleteOne;
}

export { insertSudoku, getSudokus, getOneById, updateSudokuById, deleteSudokuById};