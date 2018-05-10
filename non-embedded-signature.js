const config = require('./config.js');

const withoutTempOptions = {
  test_mode: 1,
  title: 'NDA with Acme Co.',
  subject: 'The NDA we talked about',
  message: 'Please sign this NDA and then we can discuss more.',
  signers: [{
      email_address: 'latoya.williams+1@hellosign.com',
      name: 'LaToya',
      order: 0
    },
    {
      email_address: 'latoya.williams+2@hellosign.com',
      name: 'ToyaLa',
      order: 1
    }
  ],
  cc_email_addresses: ['lawyer@example.com', 'lawyer2@example.com'],
  files: ['/Users/latoyawilliams/Downloads/NDA.pdf', '/Users/latoyawilliams/Downloads/sales-contract.pdf'],
  metadata: {
    clientId: config.CLIENTID,
    custom_text: 'NDA #9'
  }
};

const withTempOptions = {
  test_mode: 1,
  template_id: config.TEMPID,
  subject: 'Purchase Order',
  message: 'Glad we could come to an agreement.',
  signers: [{
    email_address: 'latoya.williams+1@hellosign.com',
    name: 'LaToya',
    role: 'Signer'
  }]
};

const customFieldsOptions = {
  test_mode: 1,
  template_id: config.TEMPID,
  subject: 'Purchase Order',
  message: 'Glad we could come to an agreement.',
  signers: [{
    email_address: 'latoya.williams+1@hellosign.com',
    name: 'LaToya',
    role: 'Signer'
  }],
  custom_fields: {
    name: 'Cost',
    value: '$20,000',
    editor: 'Signer',
    required: 'true'
  }
}


module.exports = {
  withoutTempOptions,
  withTempOptions,
  customFieldsOptions
};
