'use strict'


const MailListener = require('mail-listener-next');
const fs = require('fs');
const path = require('path');
const attachmentsPath = path.join(__dirname, '/attachments/');
const databaseService = require('./dataBase-service')


module.exports = function () {
  const channel = {};
  let mailListener = new MailListener({
    username: "stayer.depart@yandex.ru",
    password: "bashneft20",
    host: "imap.yandex.ru", //Сервер входящей почты: imap.yandex.ru
    port: 993, // imap port

    tls: true,
    connTimeout: 10000, // Default by node-imap
    authTimeout: 5000, // Default by node-imap,
    debug: console.log, // Or your custom function with only one incoming argument. Default: null
    tlsOptions: {
      rejectUnauthorized: false
    },

    mailbox: "INBOX", // mailbox to monitor
    searchFilter: ["UNSEEN"], // the search filter being used after an IDLE notification has been retrieved
    fetchUnreadOnStart: true, // use it only if you want to get all unread email on lib start. Default is `false`,

    mailParserOptions: {
      streamAttachments: true
    }, // options to be passed to mailParser lib.
    attachments: true, // download attachments as they are encountered to the project directory
    attachmentOptions: {
      directory: "attachmentsPath"
    }, // specify a download directory for attachments
    // to make server respond to other requests you may want
    // to pause for 'fetchingPauseTime' fetching of the email, because it 'hangs' your app
    fetchingPauseThreshold: null, // amount bytes
    fetchingPauseTime: 5000 // ms to pause fetching and process other requests
  });

  mailListener.start(); // start listening

  // stop listening
  //mailListener.stop();

  mailListener.on("server:connected", function () {
    console.log("console.log=>imapConnected");
  });

  mailListener.on("server:disconnected", function () {
    console.log("imapDisconnected");
  });

  mailListener.on("error", function (err) {
    console.log(err);
  });

  mailListener.on("mail", function (mail) {
    console.log('------New email was received-----');
    console.log('from:', mail.from);
    databaseService().saveEmailInDataBase(mail)

  });

  mailListener.on("attachment", function (attachment, email) {
    console.log(attachment.path);
  });

  return channel;

}