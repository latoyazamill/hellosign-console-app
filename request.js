const config = require('./config.js');
const hellosign = require('hellosign-sdk')({
  key: config.APIKEY
});

const {
  withTempOptions,
  withoutTempOptions,
  withTempAndFileOptions,
  customFieldsOptions,
  formFields
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

  },
  signatureRequestGet: function() {

  },
  sendSignatureRequestWithTemplate: function() {

  },
  sendSignatureRequestWithTemplateCf: function() {

  },
  signatureRequestCancel: function() {

  },
  signatureRequestRemind: function() {

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
