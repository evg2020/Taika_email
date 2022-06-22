'use strict'

const express = require('express')
const app = express()
const path = require('path')

// const mail = require('./routes/mail')

const sendEmail = require('./services/send-email-message-service.js');
const receiveEmail = require('./services/receive-email-message-service');

const PORT = process.env.PORT || 3000




app.get('/', (req, res) => {
  res.status(200)
  res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.post('/', async (req, res) => {
  const mail = new Email({
    subject: req.body.subject,
    text: req.body.text,
    from: req.body.from,
    date: req.body.date // needs to check type for time
  })
  try {
    await mail.save()
  } catch (e) {
    console.log(e);

  }
})

// local mongodb://localhost:27017
//  app.use(mail)

const dbRecord = async () => {
  const mail = new Email({
    from: [{
      address: 'stayer.depart@yandex.ru',
      name: 'Node js'
    }],
    date: 'Tue Jun 21 2022 15: 17: 49 GMT + 0300',
    subject: 'Message from Node js',
    text: 'This message was sent from Node js server'
  })
  try {
    await mail.save()
  } catch (e) {
    console.log(e);

  }

}











sendEmail();
receiveEmail(); //receiving email online




// save in MongoDB in Email Done

// mongoose.connect("mongodb://localhost:27017/local", { useUnifiedTopology: true, useNewUrlParser: true });
// const mail = new Email({
//   from: [{
//     address: 'stayer.depart@yandex.ru',
//     name: 'Node js'
//   }],
//   date: 'Tue Jun 21 2022 15: 17: 49 GMT + 0300',
//   subject: 'Message from Node js',
//   text: 'This message was sent from Node js server'
// })
// mail.save(function(err){
//   mongoose.disconnect();  // отключение от базы данных
//   if(err) return console.log(err);
//   console.log("Сохранен объект", mail);
// });