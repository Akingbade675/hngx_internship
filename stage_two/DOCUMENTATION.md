# Person API

This API allows you to create, read, update, and delete person records in a database. A person record consists of the following fields:

- user_id: A unique identifier for the person. It is a number.
- name: The full name of the person. It is a string

## Setup

To use this API, you need to have the following:

- A base URL that points to the API endpoint. The default base URL is https://person-crud-d1352f4c6877.herokuapp.com/api/.

## Request Format

All requests to this API must follow these rules:

- Use the HTTP methods GET, POST, PUT, or DELETE depending on the operation you want to perform.
- Specify the user_id of the person you want to access as a path parameter after the base URL. For example: https://person-crud-d1352f4c6877.herokuapp.com/api/123456789
- For POST and PUT requests, send the person data as a JSON object in the request body. For example: {"name": "John Doe"}
- For GET and DELETE requests, do not send any request body.

## Response Format

All responses from this API will be in JSON format. The response will have the following fields:

- status: A string that indicates whether the request was successful or not. Possible values are "success" or "error".
- message: A string that provides more information about the status. For example: "Person created successfully" or "Invalid user_id".
- data: An object that contains the person data if the request was successful, or an empty object if not.

## Sample Usage

Here are some examples of how to use this API for different operations:

### Create a new person

To create a new person, use the POST method with the base URL and send the person data in the request body. For example:

```bash
curl -X POST https://person-crud-d1352f4c6877.herokuapp.com/api \
-H "Content-Type: application/json" \
-d '{"name": "John Doe"}'
```


The response will look like this:

```json
{
  "status": "success",
  "message": "Person created successfully",
  "data": {
    "user_id": "123456789",
    "name": "John Doe"
  }
}
```


### Fetch details of a person

To fetch details of a person, use the GET method with the base URL and the user_id of the person as a path parameter. For example:

```bash
curl -X GET https://person-crud-d1352f4c6877.herokuapp.com/api/123456789
```


The response will look like this:

```json
{
  "status": "success",
  "message": "Person found",
  "data": {
    "user_id": "123456789",
    "name": "John Doe"
  }
}
```


### Modify details of an existing person

To modify details of an existing person, use the PUT method with the base URL and the user_id of the person as a path parameter, and send the updated person data in the request body. For example:

```bash
curl -X PUT https://person-crud-d1352f4c6877.herokuapp.com/api/123456789 \
-H "Content-Type: application/json" \
-d '{"name": "Jane Doe"}'
```


The response will look like this:

```json
{
  "status": "success",
  "message": "Person updated successfully",
  "data": {
    "user_id": "123456789",
    "name": "Jane Doe"
  }
}
```


### Remove a person

To remove a person, use the DELETE method with the base URL and the user_id of the person as a path parameter. For example:

```bash
curl -X DELETE https://person-crud-d1352f4c6877.herokuapp.com/api/123456789
```


The response will look like this:

```json
{
  "status": "success",
  "message": "Person deleted successfully",
  "data": {}
}
```
