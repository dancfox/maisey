var AWSXRay = require('aws-xray-sdk');

exports.handler = async () => {

    const answer = { message: "Maisey is a GOOD dog." };

    const segment = AWSXRay.getSegment(); //returns the facade segment
    const subsegment = segment.addNewSubsegment('sleeping!');
    await new Promise(resolve => setTimeout(resolve, 5000));
    subsegment.close();
    
    const response = {
        statusCode: 200,
        body: JSON.stringify(answer)
    };

    return response;
}
