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

const formFields = {
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
  },
  form_fields_per_document: [
    [
        {
            "api_id": "uniqueIdHere_1",
            "name": "",
            "type": "text",
            "x": 112,
            "y": 328,
            "width": 100,
            "height": 16,
            "required": true,
            "signer": 1,
            "page": 1,
            "validation_type": "numbers_only"
        },
        {
            "api_id": "uniqueIdHere_2",
            "name": "",
            "type": "signature",
            "x": 530,
            "y": 415,
            "width": 120,
            "height": 30,
            "required": true,
            "signer": 0,
            "page": 1
        }
    ],
    []
]
}


module.exports = {
  withoutTempOptions,
  withTempOptions,
  customFieldsOptions,
  formFields
};
