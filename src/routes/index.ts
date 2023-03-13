import { Router } from "express";
import { UserController } from "../Controllers/User";


const router = Router();
const userController = new UserController();


// router.post('/user', userController.addUser);
router.get('/user', userController.findAll);


export default router