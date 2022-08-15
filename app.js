const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const blogRoutes = require('./routes/blogRoutes');

const log = console.log;

require("dotenv").config();
const dbURI = process.env.MONGODB_URI;

const PORT = process.env.PORT || 3000;

const app = express();

// connection to mongoDB (which returns a promise)
// only if theres a connection, we listen to the server
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => app.listen(PORT))
  .catch(err => log(err.message))


// register view engine (ejs)
app.set('view engine', 'ejs');


// some middleware 
// app.use((req, res, next) => {
//   log('Hostname: ', req.hostname)
//   log('Path: ', req.path)
//   log('Method: ', req.method)
//   next();
// })

// app.use((req, res, next) => {
//   log('in the next middleware');
//   next();
// })


// middleware to deliever static files (which are public to the browser)
app.use(express.static('public'));

// middleware to get access to the form data 
app.use(express.urlencoded({extended: true}));

// logger middleware
app.use(morgan('dev'));

// app.get('/add-blog', function (req, res) {
//   const blog = new Blog({
//     title: 'new blog',
//     snippet: 'about my new blog',
//     body: 'more about my new blog'
//   })
//   blog.save()
//   .then(result => {
//     res.send(result)
//   })
//   .catch(err => log(err.message))
// })

// app.get('/all-blogs', function (req, res) {
//   // returns all the docs inside the blogs Collection
//   Blog.find()
//     .then(results => {
//       res.send(results);
//       res.end()
//     })
//     .catch(err => log(err.message))
// })

// app.get('/single-blog', function (req, res) {
//   Blog.findById('62f9767d8ff623c5c7b9b7c2')
//     .then(result => {
//       res.send(result);
//       res.end()
//     })
//     .catch(err => log(err.message))
// })

app.get('/', function (req, res) {
  res.redirect('/blogs');   
});

app.get('/about', function (req, res) {
  res.render('about', { title: 'About' });
});

// blog routes scoped under '/blogs'
app.use('/blogs', blogRoutes);


// 404 - page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});

