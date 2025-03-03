# Todo Backend NestJS
This is an example implementation of [moredip's](https://github.com/moredip)
[Todo-Backend](http://todobackend.com/) API spec, using [NestJS](https://nestjs.com/), [Prisma] (https://www.prisma.io/) and [PostgreSQL](https://www.postgresql.org/).

This example saves todos in a PostgreSQL database using Prisma ORM. This code is based on the [todo-backend-typescript](https://github.com/parambirs/todo-backend-typescript) example by [parambirs](https://github.com/parambirs) on the [Todo-Backend](http://todobackend.com/) website.

It includes a docker-compose file to run the PostgreSQL database and the application in a containerized environment. More information on how to run the application can be found in the [Running the application](#running-the-application) section.

## Running the application
To run the application, you need to have [Docker](https://www.docker.com/) installed on your machine. You can run the application using the following command:

```bash
docker-compose up --build
```

This command will start the PostgreSQL database and the application in a containerized environment. The application will be available at [http://localhost:3000](http://localhost:3000).

### Installing dependencies
If you want to install the dependencies and run the application without using Docker, you can do so by running the following commands:

```bash
npm install
npm run start
```

This will start the application on [http://localhost:3000](http://localhost:3000).

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
