# UH - CIS3365 - Class Project

Original Template: https://github.com/mubaidr/node-vue-template

This is a VueJS web app that provides a basic helpdesk functionality with Node.js backend and MSSQL

There are two parts of this project, `backend api` and `single page frontend
application` and each part is contained in the respective folder.

Major packages inlcuded and configured (as required)

## Backend

### Highlights

* Sequelize configures models from a directory
* Authentication is setup using JSONWebToken for Node.js
* custom route endpoints

[Build Setup](./backend/README.md)

## Frontend

### Highlights

* Preconfigured axios for jwt authentication
* Persistent login & register implemented using Vuex & Vue-router
* Webpack dev & build server configured (with linting)
* Stylus is enabled
* Some Vue-mixins for authentication/user info

[Build Setup](./frontend/README.md)
