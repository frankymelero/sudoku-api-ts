import { Request, Response, response } from "express"
import { handleHttp } from "../utils/error.handle"
import { insertSudoku, getSudokus, getOneById, updateSudokuById, deleteSudokuById, getRandom, getSudokusDifficulty, getRandomByDifficulty } from "../services/sudoku.service";

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

const getRandomSudoku = async (req: Request, res: Response) => {
  try {
      const responseG = await getRandom();
      res.send(responseG);
  } catch (error) {
    handleHttp(res, 'ERROR_GETTING_RANDOM_SUDOKU');
  }
}

const getSudokusByDifficulty = async ({ params }: Request, res: Response) => {
  try {
      const { difficulty } = params;
      console.log("hola")
      const response = await getSudokusDifficulty(difficulty);
      const data = response ? response : "NOT_FOUND";
      res.send(data);
  } catch (error) {
    handleHttp(res, 'ERROR_GET_SUDOKU_BY_DIFFICULTY');
  }

}

const getRandomSudokusByDifficulty = async ({ params }: Request, res: Response) => {
  try {
      const { difficulty } = params;
   
      const response = await getRandomByDifficulty(difficulty);
      const data = response ? response : "NOT_FOUND";
      res.send(data);
  } catch (error) {
    handleHttp(res, 'ERROR_GET_RANDOM_SUDOKU_BY_DIFFICULTY');
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

export { getSudoku, getAllSudokus, updateSudoku, addSudoku, deleteSudoku, getRandomSudoku, getSudokusByDifficulty, getRandomSudokusByDifficulty}