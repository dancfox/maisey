'use strict';
const { LambdaClient, InvokeCommand } = require("@aws-sdk/client-lambda");
const client = new LambdaClient({ region: "us-east-1" });

const chai = require('chai');
const expect = chai.expect;

var params = {
    FunctionName: "maisey-maiseyStatusFunction-hfKaCAAUP2sK", 
    InvocationType: 'RequestResponse',
    LogType: 'Tail',
    Payload: '{ "name" : "Dan" }'
};

describe('Tests lambda function', function () {
    it('verifies successful response', async () => {
        
        // invoke lambda function in cloud
        const command = new InvokeCommand(params);
        const response = await client.send(command);

        // decode response
        const asciiDecoder = new TextDecoder('ascii');
        const data = asciiDecoder.decode(response['Payload']);
        const payload = JSON.parse(data);
        const body = JSON.parse(payload.body);

        // test result
        expect(body.message).to.be.equal("Maisey is a CUTE dog.");
        
    });
});
