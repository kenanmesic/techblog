const router = require('express').Router();

const userRoutes = require('./userRoutes.js');
const postRoutes = require('./post.js');
const blogRoutes = require('./blogRoutes.js');

router.use('/users', userRoutes);
router.use('/post', postRoutes);
router.use('/comment', commentRoutes);


module.exports = router;
