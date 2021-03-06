const config = require('../config.js');

const signers = [{
    email_address: 'latoya.williams+1@hellosign.com',
    name: 'LaToya',
    order: 0
  },
  // {
  //   email_address: 'latoya.williams+2@hellosign.com',
  //   name: 'ToyaLa',
  //   order: 1
  // }
]

const withoutTempOptions = {
  title: 'Test invoice from api 3.',
  subject: 'Test invoice from api 3.',
  message: 'Please sign this NDA and then we can discuss more. Let me know if you have any questions.',
  test_mode: '1',
  metadata: {
    cusotm_id: 1234,
    custom_text: 'Invoice #3',
  },
  signers: [
    {
      email_address: 'latoya.williams+1@hellosign.com',
      name: 'LaToya',
      order: 0
    },
    {
      email_address: 'latoya.williams+11@hellosign.com',
      name: 'Toya',
      order: 1
    }
  ],
  cc_email_addresses: ['lawyer@example.com'],
  files: ['/Users/latoyawilliams/Desktop/test.html'],
  allow_reassign: 1,
  // signing_options: {
  //   "draw": false,
  //   "type": true,
  //   "upload": true,
  //   "phone": false,
  //   "default": "upload"
  // },
};

const withTempOptions = {
  test_mode: 1,
  //client_id: config.CLIENTID,
  //requester_email_address: 'latoyazamill@yahoo.com' ,
  template_id: '0f2cb0e008c6e8fb7ea8169dce82224c3fd5dd15',
  subject: 'Purchase Order',
  message: 'Glad we could come to an agreement.',
  signers: [{
    email_address: 'latoya.williams+1@hellosign.com',
    name: 'LaToya',
    role: 'Signer'
  },{
  email_address: 'latoya.williams+11@hellosign.com',
  name: 'LaToya',
  role: 'Lawyer'
}],
custom_fields: {
  "first_name": "Cost",
  "company_name": "$20,000",
}
};

const withTempAndFileOptions = {
  test_mode: 1,
  template_id: config.TEMPID,
  subject: 'Purchase Order and Affirmations',
  message: 'Glad we could come to an agreement.',
  signers: [{
    email_address: 'latoya.williams+1@hellosign.com',
    name: 'LaToya',
    role_name: 'Signer'
  }],
  files: ['/Users/latoyawilliams/Downloads/AFFIRMATIONS.pdf'],
};

const customFieldsOptions = {
  test_mode: 1,
  template_ids: [config.TEMPID2, config.TEMPID3],
  subject: 'Affirmations',
  message: 'Glad we could come to an agreement.',
  signers: [{
    email_address: 'latoya.williams+1@hellosign.com',
    name: 'LaToya',
    role: 'Signer'
  }],
  //use_text_tags: 1,
  //hide_text_tags: 1,
  custom_fields: [{
    "name": "Cost",
    "value": "$20,000",
    "editor": "Signer",
    "required": "true"
  },
  {
    "name": "Name",
    "value": "Three Little Crystals",
    "editor": "Signer",
    "required": "true"
  }]
};

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
  files: ['/Users/latoyawilliams/Downloads/AFFIRMATIONS.pdf', '/Users/latoyawilliams/Downloads/sales-contract.pdf'],
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
            "width": 280,
            "height": 16,
            "required": true,
            "signer": 0,
            "page": 1
        },
        {
            "api_id": "uniqueIdHere_2",
            "name": "",
            "type": "text",
            "x": 530,
            "y": 415,
            "width": 120,
            "height": 30,
            "required": true,
            "signer": 1,
            "page": 1
        }
    ],
    []
]
}


module.exports = {
  withoutTempOptions,
  withTempOptions,
  withTempAndFileOptions,
  customFieldsOptions,
  formFields,
  signers
};
