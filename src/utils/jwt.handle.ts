import {sign, verify} from "jsonwebtoken"
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET_STR = process.env.JWT_SECRET || "tkksn23";

const generateToken = (email:string) => {

    const jwt = sign({ email }, JWT_SECRET_STR, {
        expiresIn: "2h",
    });
    return jwt;
    
}

const verifyToken = (jwt:string) => {
const isOk = verify(jwt, JWT_SECRET_STR);
return isOk;
}

export { generateToken, verifyToken }