
exports.handler = async () => {

    const answer = { message: "Maisey is a GOOD dog." };

    const response = {
        statusCode: 200,
        body: JSON.stringify(answer)
    };

    return response;
}
