const router = require('express').Router();
const usersController = require('../controllers/users');
const { userValidationRules, validate } = require('../middleware/validate');

/* CRUD routes */
router.get('/', usersController.getAll);
router.get('/:id', usersController.getSingle);
router.post('/', userValidationRules(), validate, usersController.createUser);
router.put('/:id', userValidationRules(), validate, usersController.updateUser);
router.delete('/:id', usersController.deleteUser);

module.exports = router;