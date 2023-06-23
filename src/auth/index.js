const router = require('express').Router();
const {
  registerAccount,
  userLogin,
  userLogout,
  verifyEmailOtp,
  sendEmailVerification,
} = require('./authController');
const limiter = require('../../middleware/rateLimit');
const { createAccountValidator, loginValidator } = require('./authValidator');
const validatorMiddleware = require('../../middleware/validator');
const { verifyUser } = require('../../middleware/authenticate');

router.post('/logout', userLogout);

router.use(limiter());

router.post('/login', validatorMiddleware(loginValidator), userLogin);

router.post('/send-email', verifyUser, sendEmailVerification);
router.post('/verify-otp', verifyUser, verifyEmailOtp);

router.post(
  '/register',
  validatorMiddleware(createAccountValidator),
  registerAccount
);

module.exports = router;
