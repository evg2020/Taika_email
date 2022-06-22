'use strict'


 const nodemailer = require('nodemailer')

 module.exports = async function(){
  let module = {};
  let transporter = nodemailer.createTransport({
        host: 'smtp.yandex.ru',
        port: 465,
        secure: true,
        auth: {
          user: 'stayer.depart@yandex.ru',
          pass: 'bashneft20',
        },
      })
      module.result = await transporter.sendMail({
        from: ' stayer.depart@yandex.ru',
        to: ' stayer.depart@yandex.ru',
        subject: 'Message 002',
        text: ' Message 002 his message was sent from Node js server.',
        html: 'This <i>message</i> was sent from <strong>Node js</strong> server.',
      })

      console.log(module.result)
      return module
 }
