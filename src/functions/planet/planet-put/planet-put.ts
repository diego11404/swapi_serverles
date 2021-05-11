import { DynamoDB } from 'aws-sdk'
import { middyfy } from '@common/utils/functions/lambda'
import { formatJSONResponse } from '@common/utils/functions/api-gateway'

const dynamoDb = new DynamoDB.DocumentClient()

const createPlanet = async (event, context, callback) => {

  try {
    const { id } = event.pathParameters
    const headers = event.headers;
    const timestamp = new Date().toJSON()
    let planetObj = event.body

    if (headers['content-type'] !== 'application/json') {
      planetObj = JSON.parse(event.body)
    }


    const { diametro,
      clima = '',
      superficie_agua = '',
      nombre = '',
      api_url = '',
      periodo_rotacion = '',
      terreno, gravedad = '',
      periodo_orbital = '',
      peliculas = [],
      residentes = [],
      poblacion = '' } = planetObj


    const params = {
      TableName: process.env.DYNAMODB_TABLE,
      Key: {
        id
      },
      ExpressionAttributeValues: {
        ':diametro': diametro,
        ':clima': clima,
        ':superficie_agua': superficie_agua,
        ':nombre': nombre,
        ':api_url': api_url,
        ':periodo_rotacion': periodo_rotacion,
        ':fecha_edicion': timestamp,
        ':terreno': terreno,
        ':gravedad': gravedad,
        ':periodo_orbital': periodo_orbital,
        ':peliculas': peliculas,
        ':residentes': residentes,
        ':poblacion': poblacion
      },
      UpdateExpression: `SET diametro = :diametro,
      clima = :clima, superficie_agua = :superficie_agua, nombre = :nombre, 
      api_url = :api_url, periodo_rotacion = :periodo_rotacion,
      fecha_edicion = :fecha_edicion, terreno = :terreno, gravedad = :gravedad, 
      periodo_orbital = :periodo_orbital, peliculas= :peliculas, residentes = :residentes,
      poblacion = :poblacion
      `,
      ReturnValues: 'ALL_NEW',
    };

    const res = await dynamoDb.update(params).promise()
    return formatJSONResponse(res.Attributes)

  } catch (ex) {
    console.log('error', ex);
    return formatJSONResponse({ error: 'no se pudo actualizar el item' }, 500)
  }
}

export const main = middyfy(createPlanet);