import { formatJSONResponse } from '@common/utils/functions/api-gateway';
import { middyfy } from '@common/utils/functions/lambda';
import { DynamoDB } from 'aws-sdk'

const dynamoDb = new DynamoDB.DocumentClient()

const params = {
  TableName: process.env.DYNAMODB_TABLE,
};

const getAll = async (_event, _context, _callback) => {

  try {

    const result = await dynamoDb.scan(params).promise();

    return formatJSONResponse(result.Items);
  } catch (ex) {

    console.error('error', ex);
    return formatJSONResponse({ error: 'error al obtener items' }, 500);
  }
};

export const main = middyfy(getAll);
