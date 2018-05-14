const config = require('./config.js');

const embeddedRequesting = {
  test_mode: 1,
  clientId: config.CLIENTID,
  type: 'request_signature',
  subject: 'The NDA we talked about',
  requester_email_address: 'latoya.williams+1@hellosign.com',
  files: ['/Users/latoyawilliams/Downloads/NDA.pdf']
};

module.exports = {
  embeddedRequesting
};
