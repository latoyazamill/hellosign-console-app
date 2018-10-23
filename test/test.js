const expect = require('chai').expect;
const request = require('../requests/request');
const config = require('../config.js');

describe('Request', function () {
  // it('sendSignature', function () {
  //   return request.sendSignatureRequest()
  //     .then(function (results) {
  //       expect(results.statusMessage).to.equal('OK');
  //     })
  // });
  // it('signatureRequestGet', function () {
  //   return request.signatureRequestGet()
  //     .then(function (results) {
  //       expect(results.signature_request.signature_request_id).to.equal(config.SIGREQ);
  //     })
  // });
  // it('sendSignatureRequestWithTemplate', function () {
  //   return request.sendSignatureRequestWithTemplate()
  //     .then(function (results) {
  //       expect(results.signature_request.title).to.equal('Purchase Order');
  //     })
  // });
  // it('sendSignatureRequestWithTemplateCf', function () {
  //   return request.sendSignatureRequestWithTemplateCf()
  //     .then(function (results) {
  //       expect(results.signature_request.custom_fields).to.be.an('array');
  //     })
  // });
  it('signatureRequestRemind', function () {
    return request.signatureRequestRemind()
      .then(function (results) {
        expect(results.signature_request_id).to.equal(config.SIGREQ);
      })
  });
});
