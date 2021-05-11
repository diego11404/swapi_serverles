import 'source-map-support/register';

import { formatJSONResponse } from 'src/common/utils/functions/api-gateway';
import { middyfy } from '@common/utils/functions/lambda';
import { SWAPI_URL } from '@common/constants/globales';
import { http_get } from '@common/utils/functions/http';

const getOne = async (event, _context, _callback) => {
  try {

    const { id = 1 } = event.pathParameters
    const { data: film }: any = await http_get(SWAPI_URL + '/people/' + id)
    return formatJSONResponse(film);
  } catch (ex) {
    return formatJSONResponse({ error: ex.message });
  }
}

export const main = middyfy(getOne);
