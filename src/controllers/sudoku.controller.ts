import { Request, Response, response } from "express"
import { handleHttp } from "../utils/error.handle"
import { insertSudoku, getSudokus, getOneById, updateSudokuById, deleteSudokuById } from "../services/sudoku.service";

const getSudoku = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await getOneById(id);
        const data = response ? response : "NOT_FOUND";
        res.send(data);
    } catch (error) {
      handleHttp(res, 'ERROR_GET_SUDOKU');
    }

}
const getAllSudokus = async (req: Request, res: Response) => {
    try {
        const response = await getSudokus();
        res.send(response);
    } catch (error) {
      handleHttp(res, 'ERROR_GET_ALL_SUDOKUS');
    }
}
const updateSudoku = async ({params, body}: Request, res: Response) => {
    try {
        const { id } = params;
        const responseGetOne = await updateSudokuById(id,body);
        res.send(responseGetOne);
    } catch (error) {
      handleHttp(res, 'ERROR_UPDATE_SUDOKU');
    }
}

const addSudoku = async ({ body }: Request, res: Response) => {
    try {
        const responseSudoku = await insertSudoku(body);
        res.send(responseSudoku);

    } catch (error) {
      handleHttp(res, 'ERROR_POST_SUDOKU', error);
    }
}

const deleteSudoku = async ({params}: Request, res: Response) => {
    try {
        const { id } = params;
        const responseGetOne = await deleteSudokuById(id);
        res.send(responseGetOne);
        
    } catch (error) {
      handleHttp(res, 'ERROR_DELETE_SUDOKU');
    }
}

export { getSudoku, getAllSudokus, updateSudoku, addSudoku, deleteSudoku }