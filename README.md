<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Documentación del Proyecto NestJS</title>
</head>
<body>
  <h1>Documentación del Proyecto NestJS</h1>
  
  <h2>Proyecto</h2>
  <p>El proyecto sigue la siguiente estructura:</p>
  <pre>
    <code>src/
  ├── cars/
  │   ├── cars.controller.ts
  │   ├── cars.module.ts
  │   └── cars.service.ts
  ├── dto/
  │   ├── create-cars.dto.ts
  │   └── get-cars.dto.ts
  └── models/
      └── car.model.ts
  └── validators/
      └── car-validator.ts
    </code>
  </pre>

  <h2>cars.controller.ts</h2>
  <p>
    El archivo <code>cars.controller.ts</code> contiene el controlador para el recurso "cars".
    Este controlador tiene dos métodos:
  </p>
  <ul>
    <li><code>createCar</code>: Este método se encarga de crear un nuevo "car" después de validar la solicitud y llama al servicio <code>createCar</code>.</li>
    <li><code>getAllCars</code>: Este método llama al servicio <code>getAllCars</code> para devolver todos los "cars" en la base de datos.</li>
  </ul>
  <pre><code class="indent-1">Archivo: cars/cars.controller.ts</code></pre>

  <h2>cars.module.ts</h2>
  <p>
    El archivo <code>cars.module.ts</code> define el módulo <code>CarsModule</code> que contiene la configuración del módulo.
    Este módulo importa el controlador <code>CarsController</code>, el servicio <code>CarsService</code> y el modelo <code>Car</code>.
  </p>
  <pre><code class="indent-1">Archivo: cars/cars.module.ts</code></pre>

  <h2>cars.service.ts</h2>
  <p>
    El archivo <code>cars.service.ts</code> contiene los servicios utilizados por el controlador.
    Estos servicios se encargan de realizar consultas a la base de datos para insertar o obtener información sobre los "cars".
  </p>
  <pre><code class="indent-1">Archivo: cars/cars.service.ts</code></pre>

  <h2>dto</h2>
  <p>
    El directorio <code>dto</code> contiene los objetos de transferencia de datos (DTO) utilizados en el proyecto.
  </p>
  <ul>
    <li><code>create-cars.dto.ts</code>: Contiene la clase <code>CreateCarDto</code> utilizada para crear nuevos "cars".</li>
    <li><code>get-cars.dto.ts</code>: Contiene la clase <code>GetAllCarsDto</code> utilizada para obtener "cars".</li>
  </ul>
  <pre><code class="indent-1">Directorio: dto/</code></pre>

  <h2>models</h2>
  <p>
    El directorio <code>models</code> contiene los modelos de bases de datos en MongoDB.
  </p>
  <ul>
    <li><code>car.model.ts</code>: Contiene el modelo <code>Car</code> definido utilizando Mongoose y el esquema correspondiente.</li>
  </ul>
  <pre><code class="indent-1">Directorio: models/</code></pre>

  <h2>validator</h2>
  <p>
    El directorio <code>validator</code> contiene los scripts de validación utilizados en el proyecto.
  </p>
  <ul>
    <li><code>car-validator.ts</code>: Verifica que la propiedad <code>make</code> se encuentre dentro de los valores permitidos.</li>
  </ul>
  <pre><code class="indent-1">Directorio: validator/</code></pre>

  <h2>Iniciar el Proyecto</h2>
  <p>Sigue los siguientes pasos para iniciar el proyecto:</p>

  <pre><code class="indent-1">1. Descargar el repositorio:</code></pre>
  <pre><code class="indent-2">git clone https://github.com/devangelmotta/connect-test.git</code></pre>

  <pre><code class="indent-1">2. Ingresar a la carpeta del repositorio:</code></pre>
  <pre><code class="indent-2">cd connect-test</code></pre>

  <pre><code class="indent-1">3. Instalar dependencias:</code></pre>
  <pre><code class="indent-2">yarn</code> <span style="color: gray;">(o)</span> <code class="indent-2">npm install</code></pre>

  <pre><code class="indent-1">4. Iniciar el proyecto:</code></pre>
  <pre><code class="indent-2">yarn start:dev</code> <span style="color: gray;">(o)</span> <code class="indent-2">npm run start:dev</code></pre>

  <p>Cuando el proyecto se inicie automáticamente, se realizará una conexión a un Cluster de Atlas para conectarse a la base de datos.</p>

</body>
</html>
