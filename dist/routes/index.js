"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const path_1 = __importDefault(require("path"));
const auth_1 = require("./auth");
const sudoku_1 = require("./sudoku");
const router = (0, express_1.Router)();
exports.router = router;
const API_VERSION = "/api/v1/";
router.get("/", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "..", "views", "index.html"));
});
// Rutas para la autenticación
router.use(`${API_VERSION}auth`, auth_1.router);
// Rutas para sudoku
router.use(`${API_VERSION}sudoku`, sudoku_1.router);
router.get("*", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "..", "views", "notfound.html"));
});
//# sourceMappingURL=index.js.map