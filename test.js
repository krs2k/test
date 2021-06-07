const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {

   
        let data = await ddb.put({
            TableName: "test",
            Item: {
                id: "test"
            }
        }).promise();




    return { "message": "Successfully executed" };
};