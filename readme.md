# API-REST swim OF competitions => Hercúlea 2.0 

The Api can make CRUD with diferents endPoints.
## I used:

``NodeJs & JavaScript & Git & Docker``

``Mysql with Orm Sequelize.``

``To deploy bbdd => clever-cloud.``

``FrameWork Express to building the API-REST.``

``Nodemoon to automatically restarting the node application when file changes in the directory are detected.``

``Yup library to validations.`` 

``Jasmine to test the APi.``

``DockerFile to make image.``

The App is listening on :

**http://localhost:4000/**

To install all dependencies:
``npm i ``

__To start app:__

``npm start || npm run dev`` 

__To run test:__

`` npm test || npm run test``


# Other tips ... 

*_To created skelleton & install Sequelize into shell || terminal:_*

``mkdir NAME-FOLDER-I-WANT``

``cd NAME-FOLDER-I-WANT``

``npm init -y``

``npm install sequelize pg``

``npm install --save-dev sequelize-cli``

Next, let’s initialize a Sequelize project, then open the whole directory in our code editor:

``npx sequelize-cli init``

Open in visual: 

``code .``

Dependencies i need:

``npm i mysql2`` # MySQL ==> BBDD

``npm i express`` ==> FRAMEWORK TO CREATE APIS, APP WEB

``npm install --save-dev nodemon`` ==> tool to have changes on time

*_To created skelleton & install FRAMEWORK Jasmine to testing:_*

``npm install --save-dev jasmine``

Create folder Spec:

``npx jasmine init``

Add script to run: 

``test : "jasmine"``

Run testing:

``npm test ``