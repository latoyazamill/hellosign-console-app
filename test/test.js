const expect = require('chai').expect;
const request = require('../request');

describe('Request', function () {
  it('sendSignature', function () {
    return request.sendSignatureRequest()
      .then(function (results) {
        expect(results.statusMessage).to.equal('OK');
      })
  });
});
