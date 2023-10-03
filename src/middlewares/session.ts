import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";

const checkJwt = (req: Request, res: Response, next: NextFunction) => {

try {
    const jwtByUser = req.headers.authorization || '';
    const jwtWithoutBearer = jwtByUser.split(' ').pop();
    const isUser = verifyToken(`${jwtWithoutBearer}`);

    if(!isUser){
        res.status(401)
        res.send("INVALID_TOKEN")
    }else{
        next();
    }

}catch(error){
    res.status(400)
    res.send("INVALID_SESSION")
}

}

export { checkJwt }