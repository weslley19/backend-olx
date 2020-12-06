const express = require('express');
const router = express.Router();

const AdsController = require('./controllers/AdsController');
const AuthController = require('./controllers/AuthController');
const UserController = require('./controllers/UserController');

router.get('/ping', (req, res) => {
    res.json({ pong: true });
});

// Pegar estados
router.get('/states', UserController.getStates);

// Login de cadastro de usuários
router.post('/user/signin', AuthController.signin);
router.post('/user/signup', AuthController.signup);

// Informações sobre o usuário
router.get('/user/me', UserController.info);
router.put('/user/me', UserController.editAction);

// Listar categorias
router.get('/categories', AdsController.getCategories);

// Informações sobre anúncios
router.post('/ad/add', AdsController.addAction);
router.get('/ad/list', AdsController.getList);
router.get('/ad/item', AdsController.getItem);
router.post('/ad/:id', AdsController.editAction);

module.exports = router;