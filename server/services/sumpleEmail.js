//  ------New email was received-----

const responseFromYandexEmailService = {

  html: 'This <i>message</i> was sent from <strong>Node js</strong> server.',
  text: 'This message was sent from Node js server.',
  headers: {
    received: [
      'from postback19o.mail.yandex.net (postback19o.mail.yandex.net [2a02:6b8:c02:5e5:0:640:c70f:acb7]) by sas2-41a2b1fdecf9.qloud-c.yandex.net with LMTP id eDnT1Ra1cz-9cqbv9G2 for <stayer.depart@yandex.ru>; Tue, 21 Jun 2022 17:35:52+0300', 'from myt6-6c2a9472c7c7.qloud-c.yandex.net (myt6-6c2a9472c7c7.qloud-c.yandex.net [IPv6:2a02:6b8:c12:29a1:0:640:6c2a:9472]) by postback19o.mail.yandex.net (Yandex) with ESMTP id E1ACD52EA102 for <stayer.depart@yandex.ru>; Tue, 21Jun 2022 17:35:51 +0300 (MSK)',
      'from myt6-265321db07ea.qloud-c.yandex.net (myt6-265321db07ea.qloud-c.yandex.net [2a02:6b8:c12:2626:0:640:2653:21db]) by myt6-6c2a9472c7c7.qloud-c.yandex.net (mxback/Yandex) with ESMTP id OI7FcXRCnE-ZpfCqdse; Tue, 21 Jun 2022 17:35:51 +0300',
      'by myt6-265321db07ea.qloud-c.yandex.net (smtp/Yandex) with ESMTPSA id fNkzCV6EBy-ZpNu8kSE; Tue, 21 Jun 2022 17:35:51 +0300 (using TLSv1.3 with cipher TLS_AES_256_GCM_SHA384 (256/256 bits)) (Client certificate not present)'
    ],
    'x-yandex-internal': '1',
    'x-yandex-fwd': '2',
    'dkim-signature': 'v=1; a=rsa-sha256; c=relaxed/relaxed; d=yandex.ru; s=mail; t=1655822151; bh=9KtSPBjk7fdAy3NIuINbwgWijd4QKlQlfCkjTrkJ9RU=; h=Date:Subject:To:From:Message-ID; b=fSZ4AiuCuoJef9my6/OMIClzfjN9lSxoBZJy6Lxa/V7oFMm/M1JGU9KkanQ5+3rSm v6c3LxWRVFtwGmyU3y2gAx7jDZBiGHBys/FBVzd8Pkf6zRixalTcnFrGzqFRCR/GPT asHFPkpAE3o0uysq5Rly2IfhN4AoGv5n90kCclY8=',
    'authentication-results': 'myt6-6c2a9472c7c7.qloud-c.yandex.net; dkim=pass header.i=@yandex.ru',
    'x-yandex-spam': '1',
    'x-yandex-uid-status': '1 1547543771',
    'content-type': 'multipart/alternative; boundary="--_NmP-10f03856a7eddfb8-Part_1"',
    from: 'Node js <stayer.depart@yandex.ru>',
    to: 'evgeny.fedorenko@constant.obninsk.ru, stayer.depart@yandex.ru',
    subject: 'Message from Node js',
    'message-id': '<ad2c928f-e54e-44dd-a25a-ad2024a61c48@yandex.ru>',
    date: 'Tue, 21 Jun 2022 14:35:51 +0000',
    'mime-version': '1.0',
    'return-path': 'stayer.depart@yandex.ru'
  },
  subject: 'Message from Node js',
  messageId: 'ad2c928f-e54e-44dd-a25a-ad2024a61c48@yandex.ru',
  priority: 'normal',
  from: [{
    address: 'stayer.depart@yandex.ru',
    name: 'Node js'
  }],
  to: [{
      address: 'evgeny.fedorenko@constant.obninsk.ru',
      name: ''
    },
    {
      address: 'stayer.depart@yandex.ru',
      name: ''
    }
  ],
  date: new Date('2022-06-21T14:35:51.000Z'),
  receivedDate: new Date('2022-06-21T14:35:52.000Z'),
  eml: 'Received: from postback19o.mail.yandex.net (postback19o.mail.yandex.net [2a02:6b8:c02:5e5:0:640:c70f:acb7])\r\n' +
    '\tby sas2-41a2b1fdecf9.qloud-c.yandex.net with LMTP id eDnT1Ra1cz-9cqbv9G2\r\n' +
    '\tfor <stayer.depart@yandex.ru>; Tue, 21 Jun 2022 17:35:52 +0300\r\n' +
    'Received: from myt6-6c2a9472c7c7.qloud-c.yandex.net (myt6-6c2a9472c7c7.qloud-c.yandex.net [IPv6:2a02:6b8:c12:29a1:0:640:6c2a:9472])\r\n' +
    '\tby postback19o.mail.yandex.net (Yandex) with ESMTP id E1ACD52EA102\r\n' +
    '\tfor <stayer.depart@yandex.ru>; Tue, 21 Jun 2022 17:35:51 +0300 (MSK)\r\n' +
    'Received: from myt6-265321db07ea.qloud-c.yandex.net (myt6-265321db07ea.qloud-c.yandex.net [2a02:6b8:c12:2626:0:640:2653:21db])\r\n' +
    '\tby myt6-6c2a9472c7c7.qloud-c.yandex.net (mxback/Yandex) with ESMTP id OI7FcXRCnE-ZpfCqdse;\r\n' +
    '\tTue, 21 Jun 2022 17:35:51 +0300\r\n' +
    'X-Yandex-Internal: 1\r\n' +
    'X-Yandex-Fwd: 2\r\n' +
    'DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed; d=yandex.ru; s=mail; t=1655822151;\r\n' +
    '\tbh=9KtSPBjk7fdAy3NIuINbwgWijd4QKlQlfCkjTrkJ9RU=;\r\n' +
    '\th=Date:Subject:To:From:Message-ID;\r\n' +
    '\tb=fSZ4AiuCuoJef9my6/OMIClzfjN9lSxoBZJy6Lxa/V7oFMm/M1JGU9KkanQ5+3rSm\r\n' +
    '\t v6c3LxWRVFtwGmyU3y2gAx7jDZBiGHBys/FBVzd8Pkf6zRixalTcnFrGzqFRCR/GPT\r\n' +
    '\t asHFPkpAE3o0uysq5Rly2IfhN4AoGv5n90kCclY8=\r\n' +
    'Authentication-Results: myt6-6c2a9472c7c7.qloud-c.yandex.net; dkim=pass header.i=@yandex.ru\r\n' +
    'Received: by myt6-265321db07ea.qloud-c.yandex.net (smtp/Yandex) with ESMTPSA id fNkzCV6EBy-ZpNu8kSE;\r\n' +
    '\tTue, 21 Jun 2022 17:35:51 +0300\r\n' +
    '\t(using TLSv1.3 with cipher TLS_AES_256_GCM_SHA384 (256/256 bits))\r\n' +
    '\t(Client certificate not present)\r\n' +
    'X-Yandex-Spam: 1\r\n' +
    'X-Yandex-Uid-Status: 1 1547543771\r\n' +
    'Content-Type: multipart/alternative;\r\n' +
    ' boundary="--_NmP-10f03856a7eddfb8-Part_1"\r\n' +
    'From: Node js <stayer.depart@yandex.ru>\r\n' +
    'To: evgeny.fedorenko@constant.obninsk.ru, stayer.depart@yandex.ru\r\n' +
    'Subject: Message from Node js\r\n' +
    'Message-ID: <ad2c928f-e54e-44dd-a25a-ad2024a61c48@yandex.ru>\r\n' +
    'Date: Tue, 21 Jun 2022 14:35:51 +0000\r\n' +
    'MIME-Version: 1.0\r\n' +
    'Return-Path: stayer.depart@yandex.ru\r\n' +
    '\r\n' +
    '----_NmP-10f03856a7eddfb8-Part_1\r\n' +
    'Content-Type: text/plain; charset=utf-8\r\n' +
    'Content-Transfer-Encoding: 7bit\r\n' +
    '\r\n' +
    'This message was sent from Node js server.\r\n' +
    '----_NmP-10f03856a7eddfb8-Part_1\r\n' +
    'Content-Type: text/html; charset=utf-8\r\n' +
    'Content-Transfer-Encoding: 7bit\r\n' +
    '\r\n' +
    'This <i>message</i> was sent from <strong>Node js</strong> server.\r\n' +
    '----_NmP-10f03856a7eddfb8-Part_1--\r\n'
}

// console.log(responseFromYandexEmailService.date);
