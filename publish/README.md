# Server build

Stripped down server files with only transpiled JS files and no devDependencies.

To run, it is necessary to set required values in .env file, in order to connect to database and gain access to sources from Usermap API (credentials can be acquired from [Apps Manager](https://auth.fit.cvut.cz/manager/index.jsf)). 

Then - assuming you have [Node](https://nodejs.org/en/download/) installed - you can simply run

* `npm install` to download dependencies

and

* `npm start` to run the app

