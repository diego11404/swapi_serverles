## Init

```
npm install
```

### Testing con **Jest**

```
npm run test:jest
```

### despliegue en AWS _dev_ **stage**

```
npm run deploy:dev
```

O

```
serverless deploy
```

### despliegue en AWS _production_ **stage**

```
npm run deploy:prod
```

### INTEGRACION DE API SWAPI

---

- #### `stage` = dev | production
- ### _FILM_

  - `GET /films` Obtener todos los _films_

  ```
  https://xxxx....amazonaws.com/{stage}/films
  ```

  - `GET /films/{id}` Obtiene un _film_ por el _id_

  ```
  https://xxxx....amazonaws.com/{stage}/films/{id}
  ```

- ### _People_

  - `GET /people` Obtener todos las _people_

  ```
  https://xxxx....amazonaws.com/{stage}/people
  ```

  - `GET /people/{id}` Obtiene un _people_ por el _id_

  ```
  https://xxxx....amazonaws.com/{stage}/people/{id}
  ```

    <br>

### MAPEO DEL MODELO _Planet_ (Planeta) usando como base de datos NoSQL `DynamoDB`

---

- `GET /planet` Obtener todos los planetas

  ```
  https://xxxx....amazonaws.com/{stage}/planet
  ```

- `GET /people/{id}` Obtiene un planeta por el _id_

  ```
  https://xxxx....amazonaws.com/{stage}/planet/{id}
  ```

- `POST /planet` Crear un planeta

  ```
  https://xxxx....amazonaws.com/{stage}/planet/{id}
  ```

- `PUT /planet/{id}` Actualizar un planeta por el _id_

  ```
  https://xxxx....amazonaws.com/{stage}/planet/{id}
  ```

- Modelo del Objecto Planeta

  ```js
  {
  id: Number
  diametro: string,
  clima: string,
  superficie_agua: string,
  nombre: string,
  fecha_creacion: Date | Number,
  api_url: string,
  periodo_rotacion: string,
  fecha_edicion: Date,
  terreno: string,
  gravedad: string,
  periodo_orbital: string,
  peliculas: pelicua[],
  residentes: residente[],
  poblacion: string
  }
  ```

- Ejemplo con datos - `POST` /planet

  ```json
  {
    "diametro": "10465",
    "clima": "Arid",
    "superficie_agua": "1",
    "nombre": "Tatooine",
    "fecha_creacion": "2021-05-05T21:46:52.867Z",
    "api_url": "https://swapi.dev/api/planets/1/",
    "periodo_rotacion": "23",
    "terreno": "Dessert",
    "gravedad": "1",
    "periodo_orbital": "304",
    "peliculas": [
      "https://swapi.dev/api/films/1/",
      "https://swapi.dev/api/films/2/"
    ],
    "residentes": [
      "https://swapi.dev/api/people/1/",
      "https://swapi.dev/api/people/2/"
    ],
    "poblacion": "120000"
  }
  ```

### Endpoints de despliegue en aws

---

- **GET** FILMS - `https://9rzn42pz0g.execute-api.us-east-1.amazonaws.com/production/films`
- **GET** FILMS - `https://9rzn42pz0g.execute-api.us-east-1.amazonaws.com/production/films/{id}`
- **GET** PEOPLE- `https://9rzn42pz0g.execute-api.us-east-1.amazonaws.com/production/people`
- **GET** PEOPLE - `https://9rzn42pz0g.execute-api.us-east-1.amazonaws.com/production/people/{id}`
- **POST** PLANET - `https://9rzn42pz0g.execute-api.us-east-1.amazonaws.com/production/planet`
- **GET** PLANET- `https://9rzn42pz0g.execute-api.us-east-1.amazonaws.com/production/planet`
- **GET** PLANET- `https://9rzn42pz0g.execute-api.us-east-1.amazonaws.com/production/planet/{id}`
- **PUT** PLANET- `https://9rzn42pz0g.execute-api.us-east-1.amazonaws.com/production/planet/{id}`
