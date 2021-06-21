# Budgeting App - BackEnd

A backend API using express, performs full CRUD on a model for transactions, using RESTful routes, connecting to a frontend React app.

## RESTful routes

|  #  | Action  |        URL        | HTTP Verb |    CRUD    |                  Description                   |
| :-: | :-----: | :---------------: | :-------: | :--------: | :--------------------------------------------: |
|  1  |  Index  |   /transactions   |    GET    |  **R**ead  |   Get a list (or index) of all transactions    |
|  2  |  Show   | /transactions/:id |    GET    |  **R**ead  | Get an individual view (show one transactions) |
|  3  | Create  |   /transactions   |   POST    | **C**reate |           Create a new transactions            |
|  4  | Destroy | /transactions/:id |  DELETE   | **D**elete |             Delete a transactions              |
|  5  | Update  | /transactions/:id |    PUT    | **U**pdate |             Update a transactions              |

## Deployment

- Backend deployed on Heroku: https://calm-everglades-57780.herokuapp.com/
- Frontend deployed on Netlify: https://budgeting-frontend.netlify.app/

---

### Libraries Used

- Express
- Cors
- dotenv
- nodemon
