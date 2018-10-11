#!/usr/local/bin/node

console.log("~Sanity Check!~")

const print = require('node-print');//will print as an array
const request = require('./request');

const command = process.argv[2];

switch (command) {
  case 'menu':
  var menu = [
      { Command: 1, Request: 'Send Non-Embedded Signature Request'},
      { Command: 2, Request: 'Get Signature Request'},
      { Command: 3, Request: 'Send Non-Embedded Signature Request with Template'},
      { Command: 4, Request: 'Send Non-Embedded Signature Request with Template and Custom Fields'},
      { Command: 5, Request: 'Cancel Incomplete Signature Request'},
      { Command: 6, Request: 'Send Request Reminder'},
      { Command: 7, Request: 'Get Account'},
      { Command: 8, Request: 'Get Template'},
      { Command: 9, Request: 'Embedded Signing with Template'},
      { Command: 10, Request: 'Embedded Signing without Template'},
      { Command: 11, Request: 'Embedded Requesting'},
      { Command: 12, Request: 'Embedded Requesting with Signing'},
      { Command: 13, Request: 'Send Signature Request using Form Fields'},
      { Command: 14, Request: 'White Labeling Exmaples'},
      { Command: 15, Request: 'Send Non-Embedded Signature Request with Template and File'},
      { Command: 16, Request: 'List Signature Requests'}
  ]
  print.pt(menu);
    break;
  case '1':
    hellosign.signatureRequest.send(withoutTempOptions)
      .then(function(response) {
        print.pln(response)
        process.exit()
      })
      .catch(function(error) {
        console.log(error);
      });
    break;
  case '2':
    hellosign.signatureRequest.get(config.SIGREQ)
      .then(function(response) {
        print.pln(response)
        process.exit()
      })
      .catch(function(error) {
        console.log(error);
      });
    break;
  case '3':
    hellosign.signatureRequest.sendWithTemplate(withTempOptions)
      .then(function(response) {
        print.pln(response)
        process.exit()
      })
      .catch(function(error) {
        console.log(error);
      });
    break;
  case '4':
    hellosign.signatureRequest.sendWithTemplate(customFieldsOptions)
      .then(function(response) {
        print.pln(response)
        process.exit()
      })
      .catch(function(error) {
        console.log(error);
      });
    break;
  case '5':
    var signatureRequestId = 'b0627de6c4dec94d54ef2fac19eea3bedc8b5d28' //This will change depending on the signature request id

    hellosign.signatureRequest.cancel(signatureRequestId)
      .then(function(response) {
        print.pln(response) //This line might be unecessary because there is no response. The response will be a status code 200 when successful
        process.exit
      })
      .catch(function(error) {
        console.log(error);
      });
    break;
  case '6':
    hellosign.signatureRequest.remind(config.SIGREQ, {
        email_address: nonEmbdOptions.signers[0].email_address
      }) //This is only for the first signer, however, if I wanted to make it more dynamic, I could do a loop
      .then(function(response) {
        print.pln(response)
        process.exit()
      })
      .catch(function(error) {
        console.log(error);
      });
    break;
  case '7':
    hellosign.account.get()
      .then(function(response) {
        print.pln(response)
        process.exit()
      })
      .catch(function(error) {
        console.log(error);
      });
    break;
  case '8':
    hellosign.template.get(config.TEMPID)
      .then(function(response) {
        print.pln(response)
        process.exit()
      })
      .catch(function(error) {
        console.log(error);
      });
    break;
  case '9':
    hellosign.signatureRequest.createEmbeddedWithTemplate(embeddedSigningWithTemp)
      .then(function(response) {
        var signatureId = response.signature_request.signatures[0].signature_id; //first signer info only
        return hellosign.embedded.getSignUrl(signatureId);
      })
      .then(function(response) {
        print.pln(`URL = ${response.embedded.sign_url}`);//to see the entire repsonse, comment out the fire "then" and replace this argument with "response"
        process.exit()
      })
      .catch(function(error) {
        console.log(error);
      })
    break;
  case '10':
    hellosign.signatureRequest.createEmbedded(embeddedSigningWithoutTemp)
      .then(function(response) {
        var signatureId = response.signature_request.signatures[0].signature_id; //first signer info only
        return hellosign.embedded.getSignUrl(signatureId);
      })
      .then(function(response) {
        print.pln(`URL = ${response.embedded.sign_url}`);//to see the entire repsonse, comment out the fire "then" and replace this argument with "response"
        process.exit()
      })
      .catch(function(error) {
        console.log(error);
      });
    break;
  case '11':
    hellosign.unclaimedDraft.createEmbedded(embeddedRequesting)
      .then(function(response) {
        print.pln(response)
        process.exit()
      })
      .catch(function(error) {
        console.log(error);
      });
    break;
  case '12':
    hellosign.unclaimedDraft.createEmbedded(embeddedRequestingWithSigning)
      .then(function(response) {
        print.pln(response)
        process.exit()
      })
      .catch(function(error) {
        console.log(error);
      });
    break;
  case '13':
    hellosign.signatureRequest.send(formFields)
      .then(function(response) {
        print.pln(response)
        process.exit()
      })
      .catch(function(error) {
        console.log(error);
      });
    break;
  case '14':
    hellosign.apiApp.update(config.CLIENTID, whiteLabelingOptions)
      .then(function(response) {
        print.pln(response)
        process.exit()
      })
      .catch(function(error) {
        console.log(error);
      })
    break;
  case '15':
    hellosign.signatureRequest.sendWithTemplate(withTempAndFileOptions)
      .then(function(response) {
        print.pln(response)
        process.exit()
      })
      .catch(function(error) {
        console.log(error);
      });
    break;
  case '16':
    hellosign.signatureRequest.list({ page: 1 })
      .then((response) => {
        print.pln(response)
        process.exit()
      }).catch((err) => {
        console.log(error);
      });
    break;
    default:
    console.log(`${command} is not a valid command!`);
};
