const express = require('express');
const { celebrate } = require('celebrate');

const {
  create,
  login,
} = require('../controllers/users');
const {
  registerSchema,
  loginSchema,
} = require('../schemas/auth');

const router = express.Router();

router.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});
router.post('/signup', celebrate(registerSchema), create);
router.post('/signin', celebrate(loginSchema), login);

module.exports = router;
