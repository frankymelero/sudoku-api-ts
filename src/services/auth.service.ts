import { Auth } from "../interfaces/auth.interface"
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user.model"
import { encrypt, verify } from "../utils/bcrypt.handle";

const registerNewUser = async ({email, password, name} : User) => {
    const checkIs = await UserModel.findOne({email});
    if(checkIs) return "USER_EXISTS";
    const passHash = await encrypt(password);

    const registerNewUser = await UserModel.create({
        email,
        password: passHash,
        name
        })
    return registerNewUser;
}

const loginUser = async ({email, password}: Auth) => {
    const checkIs = await UserModel.findOne({email});
    if(!checkIs) return "INVALID_DATA";

    const passwordHash = checkIs.password
    const isCorrect = await verify(password, passwordHash);

    if(!isCorrect) return "PASSWORD_INCORRECTO"

    return checkIs;

}

export { registerNewUser, loginUser}