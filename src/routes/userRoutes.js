import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveria existir:
router.get('/', userController.index); // Lista de usuários
// router.get('/:id', userController.show); // Exibição de usuário especificado pelo id

// Esse deve existir ou não, depende do cenário
router.post('/', userController.store);

// Esses devem existir
router.put('/:id', loginRequired, userController.update);
router.delete('/:id', loginRequired, userController.delete);

export default router;

/**
 * PARA SABER
 * index -> lista todos os usuários => GET
 * Store/create -> cria um novo usuário => POST
 * delete -> apaga um registro de usuário => DELETE
 * show -> mostra um usuário => GET
 * update -> atualiza um usuário => PATCH ou PUT
 */
