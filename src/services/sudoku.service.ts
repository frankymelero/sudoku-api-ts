import { Sudoku } from "../interfaces/sudoku.interface";
import sudokuModel from "../models/sudoku.model";


const insertSudoku = async(sudoku: Sudoku) => {
    const responseInsert = await sudokuModel.create(sudoku);
    return responseInsert;
}
const getSudokus = async() =>{
    const responseGetAll = await sudokuModel.find({}).select('-createdAt -updatedAt');
    return responseGetAll;
}

const getRandom = async () => {
    const allSudokus = await sudokuModel.find({}).select('-createdAt -updatedAt');
   const randomIndex = Math.floor(Math.random() * allSudokus.length);
    return allSudokus[randomIndex];
  };

  const getOneById = async(id:string) => {
    const responseGetOne = await sudokuModel.findOne({_id:id}).select('-createdAt -updatedAt');
    return responseGetOne;
}
  const getSudokusDifficulty = async (difficulty:string) => {
    const responseGetbDifficulty = await sudokuModel.find({difficulty:difficulty}).select('-createdAt -updatedAt');
    return responseGetbDifficulty;
  };

  const getRandomByDifficulty = async (difficulty:string) => {
    const allsudokusbydifficulty = await sudokuModel.find({difficulty:difficulty}).select('-createdAt -updatedAt');
    const randomIdx = Math.floor(Math.random() * allsudokusbydifficulty.length);
    return allsudokusbydifficulty[randomIdx];
 
  };

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

export { insertSudoku, getSudokus, getOneById, updateSudokuById, deleteSudokuById, getRandom, getSudokusDifficulty, getRandomByDifficulty};