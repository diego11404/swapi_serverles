import * as uuid from 'uuid'
import { DynamoDB } from 'aws-sdk'
import { middyfy } from '@common/utils/functions/lambda'
import { creationObj, planetSchema } from './schema'
import { formatJSONResponse } from '@common/utils/functions/api-gateway'

const dynamoDb = new DynamoDB.DocumentClient()

const createPlanet = async (event, context, callback) => {

  try {
    const headers = event.headers;
    const timestamp = new Date().getTime()
    console.log('event', event);

    let planetObj: planetSchema = event.body
    if (headers['content-type'] !== 'application/json') {
      planetObj = JSON.parse(event.body)
    }

    if (typeof planetObj.nombre !== 'string') {
      return formatJSONResponse({ error: "Falta la propiedad Nombre" })
    }

    const { diametro,
      clima,
      superficie_agua,
      nombre,
      fecha_creacion = timestamp,
      api_url,
      periodo_rotacion,
      terreno, gravedad,
      periodo_orbital,
      peliculas = [],
      residentes = [],
      poblacion } = planetObj

    const params: creationObj = {
      TableName: process.env.DYNAMODB_TABLE,
      Item: {
        id: uuid.v1(),
        diametro,
        clima,
        superficie_agua,
        nombre,
        fecha_creacion,
        api_url,
        periodo_rotacion,
        fecha_edicion: null,
        terreno,
        gravedad,
        periodo_orbital,
        peliculas,
        residentes,
        poblacion,
      }
    }

    await dynamoDb.put(params).promise();

    console.log('Response', params.Item);
    return formatJSONResponse(params.Item, 201);
  } catch (ex) {
    console.log('error', ex);
    return formatJSONResponse({ error: 'no se pudo crear el item' }, 500)
  }
}

export const main = middyfy(createPlanet);