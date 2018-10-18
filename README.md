# HelloSign API Console App - Node.js

# Getting Started

**Install**

- Node Print: `npm install node-print` [More Info](https://www.npmjs.com/package/node-print)
- HelloSign SDK: `npm install hellosign-sdk` [More Info](https://app.hellosign.com/api/libraries)
- Testing:
     - Mocha as a developer dependency: `npm install --save-dev mocha` [More Info](https://mochajs.org/)
     - Chai:`npm install chai` [More Info](https://www.chaijs.com/guide/installation/)

**Create**

- A `config.js` file that will hold your API Key, Client ID, and Template IDs.

# Usage Options

The `./index.js` command should support the following sub commands:

| command        | request                                              | example usage                            |
|----------------|------------------------------------------------------|------------------------------------------|
|menu            | menu                                                 | ./index.js menu                          |
|1               | Send Non-Embedded Signature Request                  | ./index.js 1                             |
|2               | Get Signature Request                                | ./index.js 2                             |
|3               | Send Non-Embedded Signature Request with Template    | ./index.js 3                             |
|4               | Send Non-Embedded Signature Request with Template and Custom Fields | ./index.js 4              |
|5               | Cancel Incomplete Signature Request                  | ./index.js 5                             |
|6               | Send Request Reminder                                | ./index.js 6                             |
|7               | Get Account                                          | ./index.js 7                             |
|8               | Get Template                                         | ./index.js 8                             |
|9               | Embedded Signing with Template                       | ./index.js 9                             |
|10              | Embedded Signing without Template                     | ./index.js 10                            |
|11              | Embedded Requesting                                  | ./index.js 11                            |
|12              | Embedded Requesting with Signing                     | ./index.js 12                            |
|13              |Send Signature Request using Form Fields'             | ./index.js 13                            |

# Example Output

**Note:** The example output below is not exactly what you would see in reality. (Since the output would depend on the data that is unique to you and your signature requests). Use the output below as a template for how each command should display the data.

#### Show the menu `$ ./index.js menu`

```
+---------+---------------------------------------------------------------------+
| Command | Request                                                             |
+---------+---------------------------------------------------------------------+
| 1       | Send Non-Embedded Signature Request                                 |
| 2       | Get Signature Request                                               |
| 3       | Send Non-Embedded Signature Request with Template                   |
| 4       | Send Non-Embedded Signature Request with Template and Custom Fields |
| 5       | Cancel Incomplete Signature Request                                 |
| 6       | Send Request Reminder                                               |
| 7       | Get Account                                                         |
| 8       | Get Template                                                        |
| 9       | Embedded Signing with Template                                      |
| 10      | Embedded Signing without Template                                   |
| 11      | Embedded Requesting                                                 |
| 12      | Embedded Requesting with Signing                                    |
| 13      | Send Signature Request using Form Fields                            |
+---------+---------------------------------------------------------------------+
```

#### Get Template `$ ./index.js 8`
```
[ { template:
     { template_id: 'BASED ON YOUR TEMPLATE',
       reusable_form_id: 'AUTO GENERATED',
       title: 'NDA HelloSign',
       message: '',
       is_creator: true,
       is_embedded: false,
       can_edit: true,
       metadata: {},
       is_locked: false,
       signer_roles: [Array],

       cc_roles: [],
       documents: [Array],
       custom_fields: [],
       named_form_fields: [Array],
       accounts: [Array] },
    resHeaders:
     { date: 'Thu, 10 May 2018 22:38:04 GMT',
       'content-type': 'application/json',
       'content-length': '3273',
       connection: 'close',
       'set-cookie': [Array],
       server: 'Apache',
       'strict-transport-security': 'max-age=15768000',
       'x-ratelimit-limit': '2000',
       'x-ratelimit-limit-remaining': '1999',
       'x-ratelimit-reset': '1525991884',
       'access-control-allow-origin': '*',
       'access-control-allow-headers': 'Authorization, Origin, X-Requested-With, Content-Type, Accept',
       'access-control-allow-methods': 'GET, POST, OPTIONS',
       'user-agent': 'HelloSign API',
       vary: 'Accept-Encoding',
       p3p: 'CP="NOP3PPOLICY"' },
    statusCode: 200,
    statusMessage: 'OK' } ]
```

#### Send Non-Embedded Signature Request with Template `$ ./index.js 3`
```
[ { signature_request:
     { signature_request_id: 'AUTO GENERATED',
       test_mode: true,
       title: 'Purchase Order',
       original_title: 'Purchase Order',
       subject: 'Purchase Order',
       message: 'Glad we could come to an agreement.',
       metadata: {},
       is_complete: false,
       is_declined: false,
       has_error: false,
       custom_fields: [Array],
       response_data: [],
       signing_url: 'https://app.hellosign.com/sign/signature_request_id',
       signing_redirect_url: null,

       final_copy_uri: '/v3/signature_request/final_copy/signature_request_id9',
       files_url: 'https://api.hellosign.com/v3/signature_request/files/signature_request_id',
       details_url: 'https://app.hellosign.com/home/manage?guid=signature_request_id',
       requester_email_address: 'latoya.williams@hellosign.com',
       signatures: [Array],
       cc_email_addresses: [] },
    resHeaders:
     { date: 'Thu, 10 May 2018 22:39:27 GMT',
       'content-type': 'application/json',
       'content-length': '1623',
       connection: 'close',
       'set-cookie': [Array],
       server: 'Apache',
       'strict-transport-security': 'max-age=15768000',
       'x-ratelimit-limit': '50',
       'x-ratelimit-limit-remaining': '49',
       'x-ratelimit-reset': '1525991967',
       'access-control-allow-origin': '*',
       'access-control-allow-headers': 'Authorization, Origin, X-Requested-With, Content-Type, Accept',
       'access-control-allow-methods': 'GET, POST, OPTIONS',
       'user-agent': 'HelloSign API',
       vary: 'Accept-Encoding',
       p3p: 'CP="NOP3PPOLICY"' },
    statusCode: 200,
    statusMessage: 'OK' } ]
```
