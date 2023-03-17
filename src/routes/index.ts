import { Router } from "express";
import CreateUserController from "../Controllers/CreateUserController";
import { NoteController } from "../Controllers/NoteController";
import { UserController } from "../Controllers/UserController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import AuthenticateUserController from "../useCases/authenticateUser/AuthenticateUserController";
import RefreshTokenUserController from "../useCases/refreshTokenUser/RefreshTokenUserController";


const router = Router();
const userController = new UserController();
const noteController = new NoteController();
const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const refreshTokenUserController = new RefreshTokenUserController();

//////////////// RORAS DE TESTE DE AUTENTICAÇÃO //////////////////////
router.post('/user', createUserController.handle);
router.post('/login', authenticateUserController.handle);
router.post('/refresh-token', refreshTokenUserController.handle);


//////////////// RORAS DE USUÁRIO //////////////////////
router.get('/user', userController.findAll);
router.get('/user/:id', userController.findOne);
router.put('/user/:id', userController.update);
router.delete('/user/:id', userController.delete);
// router.post('/user', userController.create);


//////////////// RORAS DAS NOTAS //////////////////////
router.get('/note', ensureAuthenticated, noteController.findAll);
router.get('/note/:id', noteController.findOne);
router.put('/note/:id', noteController.update);
router.post('/note', noteController.create);
router.delete('/note/:id', noteController.delete);


export default router