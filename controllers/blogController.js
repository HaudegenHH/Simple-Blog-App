const Blog = require('../models/blog');

const log = console.log;



const blog_index = (req, res) => {
  // sort: -1 means descending order (from  newest to oldest)
  Blog.find().sort({createdAt: -1})
    .then(blogs => {      
       res.render('blogs/index', { title: 'Home', blogs })
    })
    .catch(err => log(err.message))  
}


const blog_details = (req, res) => {
  //log(req.params.id)  
  Blog.findById(req.params.id)
    .then(blog => {
      res.render('blogs/details', { title: 'Blogdetails', blog});  
    })
    .catch(err => {
      log(err.message);
      res.status(404).render('404', {title: 'Blog not found'});
    })
}


const blog_create_get = (req, res) => {  
  res.render('blogs/create', { title: 'Create' });  
}


const blog_create_post = (req, res) => {

  //const {title, snippet, body} = req.body
  //log(req.body)
  const blog = new Blog(req.body)

  blog.save()
    .then(() => {
      res.redirect('/blogs')
    })
    .catch(err => log(err.message))

}


const blog_delete = (req, res) => {

  const { id } = req.params;
  
  Blog.findByIdAndDelete(id)
    .then(() => {
      res.json({ redirect: '/blogs'})
    })
    .catch(err => log(err.message));  
}


module.exports = {
  blog_index, blog_details, blog_create_get, blog_create_post, blog_delete
}
