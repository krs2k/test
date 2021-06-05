const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    try {
        let data = await ddb.put({
            TableName: "users",
            Item: {
                id: "test"
            }
        }).promise();

    } catch (err) {
        // error handling goes here
    };
    return { "message": "Successfully executed" };
};