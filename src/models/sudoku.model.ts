import {Schema, Types, model, Model} from "mongoose";
import { Sudoku } from "../interfaces/sudoku.interface";

const sudokuSchema = new Schema <Sudoku>(
{
   board: {
    type: String,
    required:true
   },
   solution: {
    type: String,
    required:true
   },
   difficulty: {
    type: String,
    enum: ['easy', 'medium','hard'],
    required:true
   }
},
{
    timestamps: true,
    versionKey: false,
}
);

const sudokuModel = model('api-rest-sudoku', sudokuSchema);
export default sudokuModel;