"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const sudokuSchema = new mongoose_1.Schema({
    board: {
        type: String,
        required: true
    },
    solution: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        enum: ['easy', 'medium', 'hard'],
        required: true
    }
}, {
    timestamps: true,
    versionKey: false,
});
const sudokuModel = (0, mongoose_1.model)('api-rest-sudoku', sudokuSchema);
exports.default = sudokuModel;
