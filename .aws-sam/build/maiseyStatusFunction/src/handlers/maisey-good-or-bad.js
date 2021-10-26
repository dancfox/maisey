
exports.handler = async () => {

    const answer = { message: "Maisey is a CUTE dog." };

    const response = {
        statusCode: 200,
        body: JSON.stringify(answer)
    };

    return response;
}
