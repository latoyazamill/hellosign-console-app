const config = require('../config.js');
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
    var signatureRequestId = 'fdd3623404a369c5ed3af997b62290466afb5f17' //This will change depending on the signature request id
    return hellosign.signatureRequest.cancel(signatureRequestId)
  },
  signatureRequestRemind: function() {
    return hellosign.signatureRequest.remind(config.SIGREQ, {
      email_address: withoutTempOptions.signers[0].email_address
    })
  },
  accountGet: function() {
    return hellosign.account.get()
  },
  templateGet: function() {
    return hellosign.template.get(config.TEMPID)
  },
  createEmbedded: function() {
    return hellosign.signatureRequest.createEmbeddedWithTemplate(embeddedSigningWithTemp)
      .then(function(response) {
        var signatureId = response.signature_request.signatures[0].signature_id; //first signer info only
        return hellosign.embedded.getSignUrl(signatureId);
      })
  },
  createEmbeddedWithTemplate: function() {
    return hellosign.signatureRequest.createEmbedded(embeddedSigningWithoutTemp)
      .then(function(response) {
        var signatureId = response.signature_request.signatures[0].signature_id; //first signer info only
        return hellosign.embedded.getSignUrl(signatureId);
      })
  },
  createEmbeddedUnclaimedDraftEr: function() {
    return hellosign.unclaimedDraft.createEmbedded(embeddedRequesting)
  },
  createEmbeddedUnclaimedDraftErWs: function() {
    return hellosign.unclaimedDraft.createEmbedded(embeddedRequestingWithSigning)
  },
  sendSignatureRequestFf: function() {
    return hellosign.signatureRequest.send(formFields)
  },
  apiAppUpdate: function() {
    return hellosign.apiApp.update(config.CLIENTID, whiteLabelingOptions)
  },
  sendSignatureRequestWithTemplateAndFile: function() {
    return hellosign.signatureRequest.sendWithTemplate(withTempAndFileOptions)
  },
  signatureRequestList: function() {
    return hellosign.signatureRequest.list({
      page: 1
    })
  },
};

module.exports = request;
