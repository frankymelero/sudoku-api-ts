import { Request, Response } from "express"
import { loginUser, registerNewUser } from "../services/auth.service"
import { handleHttp } from "../utils/error.handle"

const registerController = async ({body}: Request, res: Response) => {

    try {
        const responseUser = await registerNewUser(body)
        res.send(responseUser);
    } catch (error) {
      handleHttp(res, 'ERROR_GET_ALL_SUDOKUS');
    }

}

const loginController = async ({body}: Request, res: Response) => {
    const {email, password} = body;

    const responseUser = await loginUser({email, password})

    if(responseUser === 'PASSWORD_INCORRECTO'){
        res.status(403);
        res.send(responseUser);
    }else{
        res.send(responseUser);
    }

}

export { registerController, loginController}