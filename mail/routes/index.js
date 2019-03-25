var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

var transport = {
  host: 'smtp.mailgun.org',
  auth: {
    user: 'postmaster@sandbox3a80f26dcf834f8c8a9027a836ada35b.mailgun.org',
    pass: '1b46ada2096a158a292342c3df79d4b4-acb0b40c-f8c11920'
  }
}
var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/mail/send', (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var telephone = req.body.telephone
  var message = req.body.message
  var content = `name: ${name} \n email: ${email} \n telephone: ${telephone} \n message: ${message} `

  var mail = {
    from: name,
    to: 'lex.raijmakers@gmail.com',  //Change to email address that you want to receive messages on
    subject: 'New Message from Contact Form',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      })
    }
  })
})

module.exports = router;
