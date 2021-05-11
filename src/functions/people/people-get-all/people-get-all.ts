import 'source-map-support/register';

import { formatJSONResponse } from 'src/common/utils/functions/api-gateway';
import { middyfy } from '@common/utils/functions/lambda';
import { SWAPI_URL } from 'src/common/constants/globales';
import { http_get } from 'src/common/utils/functions/http';



const getAll = async (_event, _context, _callback) => {
  try {

    const { data: films }: any = await http_get(SWAPI_URL + '/people')
    return formatJSONResponse(films);
  } catch (ex) {
    return formatJSONResponse({ error: ex.message });
  }
}

export const main = middyfy(getAll);
