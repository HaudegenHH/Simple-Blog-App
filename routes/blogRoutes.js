const express = require('express')

const Blog = require('../models/blog');
const blogController = require('../controllers/blogController');

const router = express.Router();


// get all Blogs
router.get('/', blogController.blog_index);

// post request for new blog entry
router.post('/', blogController.blog_create_post);

// get request for create new blog form
router.get('/create', blogController.blog_create_get);

// Details Page
router.get('/:id', blogController.blog_details);

// delete request for single blog entry
router.delete('/:id', blogController.blog_delete)


module.exports = router;