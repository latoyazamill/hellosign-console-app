const config = require('../config.js');

//HelloSign will send an email to the signers and ask them to come to hellosign.com to sign and complete the documents.
const embeddedRequesting = {
  test_mode: 1,
  clientId: config.CLIENTID,
  type: 'request_signature',
  subject: 'The NDA we talked about',
  requester_email_address: 'latoya.williams+111@hellosign.com',
  signer_email_address: 'latoya.williams+122@hellosign.com',
  signerName: 'LaToya',
  subject: 'Title',
  message: 'Message',
  files: ['/Users/latoyawilliams/Downloads/AFFIRMATIONS.pdf'],
  metadata: { contractID : 12345 },
  is_for_embedded_signing: 1
};

//This will instrust HelloSign to NOT email the signers and will allow you to decide when and how to display the embedded signing iFram on your site
const embeddedRequestingWithSigning = {
  test_mode: 1,
  clientId: config.CLIENTID,
  type: 'request_signature',
  subject: 'The NDA we talked about',
  requester_email_address: 'latoya.williams+111@hellosign.com',
  //signers_email_address: 'latoya.williams+122@hellosign.com',
  //signerName: 'LaToya',
  subject: 'Title',
  message: 'Message',
  files: ['/Users/latoyawilliams/Downloads/AFFIRMATIONS.pdf'],
  metadata: { contractID : 12345 },
  is_for_embedded_signing: 1
};

module.exports = {
  embeddedRequesting,
  embeddedRequestingWithSigning,
};
