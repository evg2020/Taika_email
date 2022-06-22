const mongoose = require('mongoose')
const Email = require('../models/Email')


// save in MongoDB in Email Done
module.exports = function () {
  const database = {}
  database.saveEmailInDataBase = async function (mail) {
    mongoose.connect("mongodb://localhost:27017/local", {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    const email = new Email({
      from: mail.from,
      date: mail.date,
      subject: mail.subject,
      text: mail.text
    })
    email.save(function (err) {
      mongoose.disconnect(); // отключение от базы данных
      if (err) return console.log(err);
      console.log("Сохранен объект", email);
    });
  }
  return database;
}

// подключение к внешней базе данных
//     const url = 'mongodb+srv://evg:bashneft@cluster0.xxdau.mongodb.net/?retryWrites=true&w=majority'
