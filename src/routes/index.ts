import { Router } from "express";
import { UserController } from "../Controllers/UserController";


const router = Router();
const userController = new UserController();


// router.post('/user', userController.addUser);
router.get('/user', userController.findAll);
router.get('/user/:id', userController.findOne);
router.put('/user/:id', userController.update);
router.post('/user/', userController.create);


export default router