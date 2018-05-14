const config = require('./config.js');

const embeddedSigningOptions ={
  test_mode: 1,
  client_it: config.CLIENTID,
  template_id: '',
  subjec: 'My Embedded Signature Request from my node.js Console App with a reusable form',
  message: 'Pretty awesome, right?',
  signers: [
    {
      email_address: 'latoya.williams+1@hellosign.com',
      name: 'LaToya',
      role: 'Manager'
    },
    {
      email_address: 'latoya.williams+2@hellosign.com',
      name: 'ToyaLa',
      role: 'Employee'
    }
  ]
};

module.exports = embeddedSigningOptions;
