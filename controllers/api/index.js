const router = require('express').Router();

const userRoutes = require('./userRoutes.js');
const postRoutes = require('./post.js');
const commentRoutes = require('./blogRoutes.js');


router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);


module.exports = router;
