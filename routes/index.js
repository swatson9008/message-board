const express = require('express');
const router = express.Router();

const messages = [
   {
     text: "Hi there!",
     user: "Amando",
     added: new Date()
   },
   {
     text: "Hello World!",
     user: "Charles",
     added: new Date()
   }
];




router.get('/', function(req, res) {
  res.render('index', {
    title: 'Message Board',
    messages: messages,
  });
});

router.get('/new', (req, res) => {
  res.render('form', { title: 'Submit a New Message' });
});

router.post('/new', function(req, res) {
  try {
    messages.push({
      text: req.body.message,
      user: req.body.author,
      added: new Date(),
    });
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
