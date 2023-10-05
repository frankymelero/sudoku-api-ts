"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const auth_controllers_1 = require("../controllers/auth.controllers");
const router = (0, express_1.Router)();
exports.router = router;
/* Uncomment to add an user with privileges to add, update and delete sudokus. Feel free to comment back once done.
router.post("/register", registerController);
*/
router.post("/login", auth_controllers_1.loginController);
//# sourceMappingURL=auth.js.map