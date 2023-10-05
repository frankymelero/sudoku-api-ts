"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkJwt = void 0;
const jwt_handle_1 = require("../utils/jwt.handle");
const checkJwt = (req, res, next) => {
    try {
        const jwtByUser = req.headers.authorization || '';
        const jwtWithoutBearer = jwtByUser.split(' ').pop();
        const isUser = (0, jwt_handle_1.verifyToken)(`${jwtWithoutBearer}`);
        if (!isUser) {
            res.status(401);
            res.send("INVALID_TOKEN");
        }
        else {
            next();
        }
    }
    catch (error) {
        res.status(400);
        res.send("INVALID_SESSION");
    }
};
exports.checkJwt = checkJwt;
