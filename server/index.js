'use strict'

const express = require('express')
const app = express()
const path = require('path')
const databaseService = require('./services/dataBase-service')()

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




// sendEmail();
// receiveEmail();

const id = '62b2ae9b298e156e2d3f0e8c'


// databaseService.findEmailById(id)
// databaseService.deleteEMailById(id)
// databaseService.getAllEmailFromDataBase()

const findByParam = {
  address: 'evgeny.fedorenko@constant.obninsk.ru'
}
databaseService.getEmailByParam(findByParam)