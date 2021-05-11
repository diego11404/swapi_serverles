import { formatJSONResponse } from '@common/utils/functions/api-gateway';
import { middyfy } from '@common/utils/functions/lambda';
import { DynamoDB } from 'aws-sdk'

const dynamoDb = new DynamoDB.DocumentClient()


const getOne = async (event, _context, _callback) => {

  try {

    const { id = 1 } = event.pathParameters

    const params = {
      TableName: process.env.DYNAMODB_TABLE,
      Key: {
        id
      },
    };

    const result = await dynamoDb.get(params).promise();

    return formatJSONResponse(result);
  } catch (ex) {
    console.error('error', ex);
    return formatJSONResponse({ error: 'error al obtener item ' + event.pathParameters.id }, 500);
  }


};

export const main = middyfy(getOne);
