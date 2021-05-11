
import { Example } from "../functions/planet/planet-post/schema";
import { SWAPI_URL } from "../common/constants/globales";
import { http_get, http_post } from "../common/utils/functions/http";

describe("Probando SWAPI (films)", () => {

  it("deberia retornar un arreglo de peliculas", async () => {
    expect.assertions(2);
    const { data: films }: any = await http_get(SWAPI_URL + '/films')
    expect(films['results']).toBeInstanceOf(Array)
    expect(films['results'].length).toBeGreaterThan(1)
  });

});

describe("Probando SWAPI (people)", () => {

  it("deberia retornar un arreglo de persojanes", async () => {
    expect.assertions(2);
    const { data: films }: any = await http_get(SWAPI_URL + '/people')
    expect(films['results']).toBeInstanceOf(Array)
    expect(films['results'].length).toBeGreaterThan(1)
  });

});


describe("Probando mapeo del modelo planet", () => {
  const URL_PROD = 'https://9rzn42pz0g.execute-api.us-east-1.amazonaws.com/production'

  it("deberia retornar un arreglo de planetas", async () => {
    expect.assertions(1);
    const { data }: any = await http_get(URL_PROD + '/planet')
    expect(data).toBeInstanceOf(Array)
  });

  it("deberia guardar un planeta", async () => {
    expect.assertions(2);
    const { data: newPlanet }: any = await http_post(URL_PROD + '/planet', JSON.stringify(Example))
    expect(newPlanet).toBeInstanceOf(Object)
    expect(newPlanet).toHaveProperty('id')
  });

});
