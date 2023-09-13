<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->
  [![License](https://img.shields.io/github/license/nestjs/nest)](LICENSE)

## Description

This is a simple RESTful API that allows you to perform CRUD (Create, Read, Update, Delete) operations on a collection of person records. A person record consists of the following fields:

- user_id: A unique identifier for the person. It is a number.
- name: The full name of the person. It is a string.

UML diagram for API resource can be viewed [here](https://online.visual-paradigm.com/app/diagrams/?lightbox=1&highlight=8888b6&edit=https%3A%2F%2Fonline.visual-paradigm.com%2Fapp%2Fdiagrams%2F%23diagram%3Aproj%3D0%26type%3DClassDiagram%26gallery%3D%2Frepository%2Ff078f2a9-88f3-4763-8889-b01cd2b7b90f.xml%26name%3DCar%2520and%2520Driver%2520Class%2520Diagram&editBlankUrl=https%3A%2F%2Fonline.visual-paradigm.com%2Fapp%2Fdiagrams%2F%23diagram%3Aproj%3D0%26vpov%3D16.3%26vpob%3D20220410%26client%3D1%26edit%3D_blank&layers=1&nav=1&title=Car%20and%20Driver%20Class%20Diagram&vpov=16.3&vpob=20220410#R3cU2FsdQGVkX1l%2F1IWGFeWLjMfgdp9iGJCon3rVwAdp0I3DWn5F6g%3Dg8rGXKw5dgaVegq4rv261lxb0jtAV2E4uud8fmh9wyIE8lRNDmE%2FaH61%2FIq34QzKQ1NmTadAMG5B6UxhBDpRwxt7zs%2B4chIlmvBsowlxBG%2BngOIkyGAyQG0FWMe1HESXlfJro3kWm9HGBN9LiJ705vgIHVgIY9kSyYHp%2FGnsaKUDBTjBwDCJXIU%2Bx4H0dR%2FJXTcIENNR0zLeItO6C9MH%2FIEhBqBXGXv%2BXOJFLP9Dx6uhfFRbs0rsJJC79wqpf0AvGyEdGdmNrlOjd6eFOCFTiCfS5Zme9tpxdwepywnUwXADHYt3qaSgwvr42H8bTNlWeMFQs1UQnGP7%2FBRbV0WNK2LkSN50DiRtRFBt6AIMRBKi8B2hC8s8kvsnnx69azQkYWdD%2FYFXdevXacLiuaxwejnCjgIbK08uuID2mCmt4YeysPsNi%2BtBr573y%2FIspImZpuSdvKnj6J0mZzv2PaFDHYr87F3Hpj72jY8v3kqCEW37af98D5fv5tEgqMBJnO27LY%2Bwy1XqFMtG3uoDedMykKVEN0kUbFX2f081kAQAWpkobR2tEkMcd6ScVyEWgnN379qOMYmzazxwUh6Gox0v1TZRcvOffyCDuvLeDfuAmQ3B%2F%2F6UBJdh%2Feyk48UjpGzorkxEB%2FHLuizd%2F5GeCcBBGhV5uzj3pydgr44SdWkVK0yWlfyiboKsH5yMTND8f%2FGQ%2BjoDTKRxSU1PNKtmlo9DOwgkkGQQSB%2B8C1MGh9btLLab2wcpILzls1LpjKRQgyeStzcBlXdZMqxwyUV5icKrJbpYmpmA9Y20QIvJ%2BJm2LozP7B5w%2BZz2GMQCxF3AtLRsnIdh9mkOggHe29eVdgOoTu%2Buf0B%2F5rhqlUdIrW0zoEaeJzdSDoS7fegfA2R9EuAu%2BafebxU29HxaAFg%2FCizS0SL4x5t5%2BfcjJBVeB2useb%2F0s3MlK6pN9khzcGzExClywpN1PGMIMffCASh%2FptmX%2BfaNRPDkQMWtHIQ7u31CVu4rDeXKVtKucCWvT09%2B1JbQAriO1SQ14kb2TWiiumvwxNkbWc8G5aCIP5ulKvgCJSLkZreuvNV1AAzG6EjtzpXcGEgnOvj2odjLeFnQ%2FnvZfSRvDlf1Z%2BdSxet6%2FecPzM5lc4yHwgj%2B1%2F%2FbPEYY3pmjJbhqogxneakOzlqxiysMQzyfgJKXXAh333j42vx4F%2FjTE4U94Tf2udSzf9kJXVhKTknlBOor7idMgMCr7BivbR1H%2FKcck0VpO8C3GX%2FlAncgm6Yin1dw54R06apMT4HqLIXvWbzG%2BdFpKzOUGFI08Bxa25enNDAZO6V21WcYg%2FiKJVWTRE4MS0uRuao435mM9BiQX10hm8AT8Z1OEOpNGlh2fdHMD479MuSSYVJe0SRN9iN1qNg8QE5h18S3rGgM4Mcf3kjQ%2FSBgVbbacq4FWEPAMHmkoHDvlQtPmr3N9Z8JHDHZHxci8PIJur3q58l9xsoX5%2FfHhLrOQ2Dlv9ZSRkx66IMXdMTZj%2BiwVhW%2F1FVEP5Jv50QOSWxwwguedZqBQztRUt%2BfaLz%2B4KHTerE9rOai3OGgAZjXIY21%2FkJyOtig7aZ56fzTQGnJ2wdEnrSnLKiKXKBWCLSyPWcdshdYZHbIWd0sUhVQXYIY2oHTEsERrtxC1LxqL4fUwWQAvjfPIqi2ktt%2BMSwPeSHW8lnj5hHWQIha%2Frbn%2BxPCjLvgiWh6DLh9tQSjRTwSwVtWl7CU1q0tIc%2BTzNmcPkwbqpzbS%2B7XSNXbumaX%2FaNPViS7aycPEF%2BXYaIrlUQAlA9aQpCKbsy%2FhOZ6bbRfLQgCqp7F2GQ2E9fTt8dhM2Zsw%2F7BjLd7OEmLe4D3AC263dv1VyS1ZZlAq2S9afhMUXmhrumBr%2Fv467eaP14V8K0KbRS1H91GEW0If484Q9JBqSw%2FT%2BmthtmDuBlxAN%2B3nx6ytxopykDYpVlmH0evOQ9lVfn6V95rA5JlZSlou%2BlNxuaq0y%2B4cAEmaQbFpGNRKuzocewSp8NuyyO5WVKcyqYquqz0Jl6401%2Fn2jE9FLsNatMJiI%2FMMVDwnm4FiNHcBomobyHpYGFcZ4S%2Fldn3Yhwk38zRvDhkV7dTH5VWpVpNRPaMN0j4jcIEypMx0sLkmgpkmoXB0fjYrwdLK3wCISwlmy2%2Fetj%2BawamLlk2pBVojV4S7CraCYkmN1TdQzZZgejlX9n88z9JAVCARRteFYVbd29jepyMRg9sA432IHIriFhcDsJF1LSUwMEr83lGLPyNgo74vlQWfeYFbwdIipNC3lqg3ZrGjQEPcSY5fm0QhEjGLQKRq5qDlny%2FUcGMjhNah8vKfZI0BwfWr7ljoVnyvH4h8riUx9M%2B%2FdfAoRkk6TRWAj06t1%2BYOoeEpKgLmyjgvet1d%2BisJfpFCLmYAIxE%2BvHoK2I0BXOkjBB3zZeqsXu79pPTpFBtNpy4MCI6Fu2ON0MC59NlPQeOvMDt6tHvtkSBTsepM%2F7tDJywRUQnHGuCbHf6BUaoxnxyZTydQWkf1YWOoDESbysMu8L4RjWFvgRFCUs%2FjMcneg7G386yeEfkUb%2B1Vmvm4lpzqfH8P1tSU5mg9n630EF0tSV2X1AOTbtjoPECy1pTevj1jZhubiAxLEYBCCX1rt%2FVVc%3D17VtZl71)

## Installation

To install the dependencies for this API, run the following command in the root directory of the project:

```bash
$ yarn install
```

## Prerequisites

To run this API, you need to have the following installed on your system:

- [Node.js](https://nodejs.org/en/) (version 12 or higher)
- [Nest CLI](https://docs.nestjs.com/cli/overview) (version 8 or higher)
- [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) (version 7 or higher)


## Configuration

To configure the database connection and other environment variables, create a .env file in the root directory of the project and add the following content:

```env
# Database URL
DB_URL=your_postgresql_database_url

# Port number
PORT=3000
```


You can obtain your PostgreSQL database URL from Heroku by following these steps:

- Log in to your Heroku account and create a new app.
- Go to the Resources tab and search for Heroku Postgres in the Add-ons section.
- Select a plan (you can start with the free one) and click Provision.
- Go to the Settings tab and click on View Credentials under Database Credentials.
- Copy the URI value and paste it in your .env file as the value of DB_URL.

## Running the API

To start the API in development mode, run the following command:

```bash
yarn run start:dev
```


This will launch the API on http://localhost:3000 (or the port number you specified in the .env file) and enable hot reloading.

To start the API in production mode, run the following command:

```bash
yarn run start:prod
```


This will build and optimize the code for production and launch the API on http://localhost:3000 (or the port number you specified in the .env file).

## Deploying the API

To deploy the API to Heroku, run the following commands:

```bash
heroku login
cd your-nestjs-project
heroku git:remote -a your-heroku-app-name
git push heroku master
```


This will push your code to Heroku and trigger a build process that will install your dependencies, generate Prisma Client, and start your app.

You can visit your app by clicking on the link provided by Heroku or by running:

```bash
heroku open
```


## Testing the API

The API was tested using Postman test scripts. Results of the tests can be viewed [here](https://github.com/Akingbade675/hngx_internship/edit/main/stage_two/postman_test_run.json)

To test the API endpoints, you can use any HTTP client tool such as [Postman](https://www.postman.com/) or [curl](https://curl.se/). The API supports the following operations:

- GET /api: Fetch all persons from the database.
- GET /api/:user_id: Fetch a single person by their user_id from the database.
- POST /api: Create a new person and save it to the database. The request body should contain a JSON object with the following fields:
  - name: The full name of the person. It is a required string field.
- PUT /api/:user_id: Update an existing person by their user_id in the database. The request body should contain a JSON object with any of the fields mentioned above that need to be updated.
- DELETE /api/:user_id: Delete an existing person by their user_id from the database.

Here are some examples of how to use curl to test the API endpoints:

```bash
# Fetch all persons
curl -X GET http://localhost:3000/api

# Fetch a single person by user_id
curl -X GET http://localhost:3000/api/123456789

# Create a new person
curl -X POST http://localhost:3000/api \
-H "Content-Type: application/json" \
-d '{"name": "John Doe", "age": 25, "gender": "male", "email": "johndoe@example.com"}'

# Update an existing person by user_id
curl -X PUT http://localhost:3000/api/123456789 \
-H "Content-Type: application/json" \
-d '{"age": 26, "email": ""}'

# Delete an existing person by user_id
curl -X DELETE http://localhost:3000/api/123456789
```


The API will return JSON responses with appropriate status codes and messages. For example, if you create a new person successfully, you will get a response like this:

```json
{
  "status": "success",
  "message": "Person created successfully",
  "data": {
    "user_id": "123456789",
    "name": "John Doe",
    "age": 25,
    "gender": "male",
    "email": "johndoe@example.com"
  }
}
```


If you try to fetch a person that does not exist, you will get a response like this:

```json
{
  "status": "error",
  "message": "Person not found"
}
```
