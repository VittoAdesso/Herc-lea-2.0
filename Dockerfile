
FROM node:16.13.0
# copiame los archivos de mi proyecto de la carpeta 
# le digo que me copie mis archivos (todos), y me los guarde en una carpeta nueva -- origen --> destino
COPY swim-competition /projectVitto
# entra en proyecto
RUN cd / projectVitto
# una vez dentro ejecuta npm install para dependency
RUN npm install
# CMD comando o script que se va a ejecutar cuando se lance el contenedor , para que se ejecute 
CMD npm start



