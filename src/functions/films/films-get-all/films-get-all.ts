import 'source-map-support/register';

import { formatJSONResponse } from 'src/common/utils/functions/api-gateway';
import { middyfy } from '@common/utils/functions/lambda';
import { SWAPI_URL } from 'src/common/constants/globales';
import { http_get } from 'src/common/utils/functions/http';


const getAll = async (_event, _context) => {
  try {

    const { data: films }: any = await http_get(SWAPI_URL + '/films')
    return formatJSONResponse(films)
  } catch (ex) {
    return formatJSONResponse({ error: 'error al obtener items ' })
  }
}

export const main = middyfy(getAll);
