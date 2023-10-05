"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const auth_1 = require("./auth");
const sudoku_1 = require("./sudoku");
const router = (0, express_1.Router)();
exports.router = router;
const API_VERSION = "/api/v1/";
router.get("/", (req, res) => {
    res.send("Bienvenido a la API de SUDOKU. Mensaje por escribir.");
});
// Rutas para la autenticación
router.use(`${API_VERSION}auth`, auth_1.router);
// Rutas para sudoku
router.use(`${API_VERSION}sudoku`, sudoku_1.router);
//# sourceMappingURL=index.js.map