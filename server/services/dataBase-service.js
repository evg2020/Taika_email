const mongoose = require('mongoose')
const Email = require('../models/Email')



// подключение к внешней базе данных https://cloud.mongodb.com/
//mail    stayer.depart@yandex.ru
// pass   bn
//const url = 'mongodb+srv://evg:bashneft@cluster0.xxdau.mongodb.net/?retryWrites=true&w=majority'

module.exports = function () {
  const database = {};

  database.saveEmailInDataBase = async function (mail) {
    await mongoose.connect("mongodb://localhost:27017/local", {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    const email = new Email({
      from: mail.from,
      date: mail.date,
      subject: mail.subject,
      text: mail.text
    })
    email.save()
      .then(email => {
        console.log("Сохранен объект", email);
        mongoose.disconnect()
      })
      .catch(err => {
        console.log(err);
        mongoose.disconnect();
      })
  }

  database.getAllEmailFromDataBase = async function () {
    await mongoose.connect("mongodb://localhost:27017/local", {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    Email.find({}, (err, mail) => {
      mongoose.disconnect();
      if (err) {
        return console.log(err);
      }
      console.log(mail);
    })
  }

  database.getEmailByParam = async function (param) {
    await mongoose.connect("mongodb://localhost:27017/local", {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    Email.find(param, (err, mail) => {
      mongoose.disconnect();
      if (err) {
        return console.log(err);
      }
      console.log(mail);
    })
  }

  database.findEmailById = async function (id) {
    await mongoose.connect("mongodb://localhost:27017/local", {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    Email.findById(id, (err, mail) => {
      mongoose.disconnect();
      if (err) {
        return console.log(err);
      }
      console.log('getEmaiById->' + mail);
    })
  }

  database.deleteEMailById = async function (id) {
    await mongoose.connect("mongodb://localhost:27017/local", {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    Email.deleteOne({"_id": id}, (err, mail) => {
      mongoose.disconnect();
      if (err) {
        return console.log(err);
      }
      console.log(mail);
    })
  }

  return database;
}