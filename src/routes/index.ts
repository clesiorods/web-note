import { Router } from "express";
import CreateUserController from "../Controllers/CreateUserController";
import { NoteController } from "../Controllers/NoteController";
import { UserController } from "../Controllers/UserController";


const router = Router();
const userController = new UserController();
const noteController = new NoteController();
const createUserController = new CreateUserController();

//////////////// RORAS DE TESTE DE AUTENTICAÇÃO //////////////////////
router.post('/user', createUserController.handle);


//////////////// RORAS DE USUÁRIO //////////////////////
router.get('/user', userController.findAll);
router.get('/user/:id', userController.findOne);
router.put('/user/:id', userController.update);
router.delete('/user/:id', userController.delete);
// router.post('/user', userController.create);


//////////////// RORAS DAS NOTAS //////////////////////
router.get('/note', noteController.findAll);
router.get('/note/:id', noteController.findOne);
router.put('/note/:id', noteController.update);
router.post('/note', noteController.create);
router.delete('/note/:id', noteController.delete);


export default router