const config = require('./config.js');
const hellosign = require('hellosign-sdk')({
  key: config.APIKEY
});

const {
  withTempOptions,
  withoutTempOptions,
  withTempAndFileOptions,
  customFieldsOptions,
  formFields,
  signers
} = require('./non-embedded-signature.js');
const {
  embeddedSigningWithTemp,
  embeddedSigningWithoutTemp
} = require('./embedded-signing.js');
const {
  embeddedRequesting,
  embeddedRequestingWithSigning
} = require('./embedded-requesting.js');

const {
  whiteLabelingOptions
} = require('./whitelabeling.js')

const request = {
  sendSignatureRequest: function() {
    return hellosign.signatureRequest.send(withoutTempOptions)
  },
  signatureRequestGet: function() {
    return hellosign.signatureRequest.get(config.SIGREQ)
  },
  sendSignatureRequestWithTemplate: function() {
    return hellosign.signatureRequest.sendWithTemplate(withTempOptions)
  },
  sendSignatureRequestWithTemplateCf: function() {
    return hellosign.signatureRequest.sendWithTemplate(customFieldsOptions)
  },
  signatureRequestCancel: function() {
    var signatureRequestId = '9ad58d48047dd7133a5eb46ddd12f41a9518c0a4' //This will change depending on the signature request id
    return hellosign.signatureRequest.cancel(signatureRequestId)
  },
  signatureRequestRemind: function() {
    return hellosign.signatureRequest.remind(config.SIGREQ, {
        email_address: signers[0].email_address
      }) //This is only for the first signer, however, if I wanted to make it more dynamic, I could do a loop
  },
  accountGet: function() {

  },
  templateGet: function() {

  },
  createEmbedded: function() {

  },
  createEmbeddedWithTemplate: function() {

  },
  createEmbeddedUnclaimedDraftEr: function() {

  },
  createEmbeddedUnclaimedDraftErWs: function() {

  },
  sendSignatureRequestFf: function() {

  },
  apiAppUpdate: function() {

  },
  sendSignatureRequestWithTemplateAndFile: function() {

  },
  signatureRequestList: function() {

  },
};

module.exports = request;
