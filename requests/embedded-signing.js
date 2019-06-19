const config = require('../config.js');

const embeddedSigningWithTemp = {
  test_mode: 1,
  clientId: config.CLIENTID,
  template_id: 'dcd1333d0067d67af022e478f38c7d2e2d66bcad',
  subject: 'My Embedded Signature Request from my node.js Console App with a reusable form',
  message: 'Pretty awesome, right?',
  signers: [
    {
      email_address: 'latoya.williams+1@hellosign.com',
      name: 'LaToya',
      role_name: 'Client'
    },
    {
      email_address: 'latoya.williams+2@hellosign.com',
      name: 'ToyaLa',
      role_name: 'Witness'
    }
  ],
  ccs: [
    {
      email_address: 'bob@example.com',
      role: 'Accounting'
    }
  ]
};

const embeddedSigningWithoutTemp = {
  test_mode: 1,
  clientId: config.CLIENTID,
  subject: 'Embedded Signature Request without a template',
  message: "Awesome, right?",
  signers: [
    {
      email_address: 'latoya.williams+1@hellosign.com',
      name: 'LaToya'
    },
    {
      email_address: 'latoya.williams+2@hellosign.com',
      name: 'ToyaLa'
    }
  ],
  file_url: ['https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf'],
//   form_fields_per_document: [
//     [
//         {
//             "api_id": "uniqueIdHere_1",
//             "name": "",
//             "type": "text",
//             "x": 112,
//             "y": 328,
//             "width": 280,
//             "height": 16,
//             "required": true,
//             "signer": 0,
//             "page": 1
//         },
//         {
//             "api_id": "uniqueIdHere_2",
//             "name": "",
//             "type": "signature",
//             "x": 530,
//             "y": 415,
//             "width": 120,
//             "height": 30,
//             "required": true,
//             "signer": 1,
//             "page": 1
//         }
//     ],
//     []
// ]
};

module.exports = {
  embeddedSigningWithTemp,
  embeddedSigningWithoutTemp
};
