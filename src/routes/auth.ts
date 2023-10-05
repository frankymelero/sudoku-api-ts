import { Router } from "express";
import { registerController, loginController} from "../controllers/auth.controllers"
const router = Router();
/* Uncomment to add an user with privileges to add, update and delete sudokus. Feel free to comment back once done.
router.post("/register", registerController);
*/
router.post("/login", loginController);

export { router }