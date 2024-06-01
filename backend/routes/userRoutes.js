const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const requireAdmin = require('../middleware/requireAdmin');


// Public routes
router.post('/signup', userController.signup);
router.post('/login', userController.login);

router.get('/', userController.getAllUsers);
router.patch('/:id', userController.updateUser); // Update user (protected route)
router.delete('/:id', userController.deleteUser); // Delete user (protected route)



module.exports = router;
