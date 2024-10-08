const router = require('express').Router();
const userRoutes = require('./user-routes');
const jotRoutes = require('./jot-routes');

router.use('/users', userRoutes);
router.use('/jots', jotRoutes);

module.exports = router;
