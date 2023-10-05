"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const auth_1 = require("./auth");
const sudoku_1 = require("./sudoku");
const router = (0, express_1.Router)();
exports.router = router;
// Rutas para la autenticación
router.use("/api/v1/auth", auth_1.router);
// Rutas para sudoku
router.use("/api/v1/sudoku", sudoku_1.router);
//# sourceMappingURL=index.js.map