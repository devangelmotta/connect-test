# Documentación del Proyecto NestJS

## Estructura del Proyecto

El proyecto sigue la siguiente estructura:

src/
├── cars/
│ ├── cars.controller.ts
│ ├── cars.module.ts
│ └── cars.service.ts
├── dto/
│ ├── create-cars.dto.ts
│ └── get-cars.dto.ts
├── models/
│ └── car.model.ts
└── validators/
└── car-validator.ts


## `cars.controller.ts`

El archivo `cars.controller.ts` contiene el controlador para el recurso "cars". Este controlador tiene dos métodos:

- `createCar`: Este método se encarga de crear un nuevo "car" después de validar la solicitud y llama al servicio `createCar`.
- `getAllCars`: Este método llama al servicio `getAllCars` para devolver todos los "cars" en la base de datos.

Archivo: `cars/cars.controller.ts`

## `cars.module.ts`

El archivo `cars.module.ts` define el módulo `CarsModule` que contiene la configuración del módulo. Este módulo importa el controlador `CarsController`, el servicio `CarsService` y el modelo `Car`.

Archivo: `cars/cars.module.ts`

## `cars.service.ts`

El archivo `cars.service.ts` contiene los servicios utilizados por el controlador. Estos servicios se encargan de realizar consultas a la base de datos para insertar o obtener información sobre los "cars".

Archivo: `cars/cars.service.ts`

## `dto`

El directorio `dto` contiene los objetos de transferencia de datos (DTO) utilizados en el proyecto.

- `create-cars.dto.ts`: Contiene la clase `CreateCarDto` utilizada para crear nuevos "cars".
- `get-cars.dto.ts`: Contiene la clase `GetAllCarsDto` utilizada para obtener "cars".

Directorio: `dto/`

## `models`

El directorio `models` contiene los modelos de bases de datos en MongoDB.

- `car.model.ts`: Contiene el modelo `Car` definido utilizando Mongoose y el esquema correspondiente.

Directorio: `models/`

## `validator`

El directorio `validator` contiene los scripts de validación utilizados en el proyecto.

- `car-validator.ts`: Verifica que la propiedad `make` se encuentre dentro de los valores permitidos.

Directorio: `validator/`

Iniciar el Proyecto
-------------------

Sigue los siguientes pasos para iniciar el proyecto:

    1. Descargar el repositorio:

    git clone https://github.com/devangelmotta/connect-test.git

    2. Ingresar a la carpeta del repositorio:

    cd connect-test

    3. Instalar dependencias:

    yarn

    4. Iniciar el proyecto:

    yarn start:dev

Cuando el proyecto se inicie automáticamente, se realizará una conexión a un Cluster de Atlas para conectarse a la base de datos.
