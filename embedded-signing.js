const config = require('./config.js');

const embeddedSigningWithTemp = {
  test_mode: 1,
  clientId: config.CLIENTID,
  template_id: '846871b8078716c144496d86aa491675d3e3d59f',//template ID is currently in draft
  subject: 'My Embedded Signature Request from my node.js Console App with a reusable form',
  message: 'Pretty awesome, right?',
  signers: [
    {
      email_address: 'latoya.williams+1@hellosign.com',
      name: 'LaToya',
      role: 'Client'
    },
    {
      email_address: 'latoya.williams+2@hellosign.com',
      name: 'ToyaLa',
      role: 'Witness'
    }
  ]
};

const embeddedSigningWithoutTemp = {
  test_mode: 1,
  clientId: config.CLIENTID,
  subject: 'Embedded Signature REquest without a template',
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
  files: ['/Users/latoyawilliams/Downloads/NDA.pdf', '/Users/latoyawilliams/Downloads/sales-contract.pdf']
};

module.exports = {
  embeddedSigningWithTemp,
  embeddedSigningWithoutTemp
};
