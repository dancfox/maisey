
exports.handler = async () => {

    console.log("executing function...")

    const answer = { message: "Maisey is a CUTE dog." };

    const response = {
        statusCode: 200,
        body: JSON.stringify(answer)
    };

    console.log("function complete!")

    return response;
}
