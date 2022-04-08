const express = require('express');
const db = require('./models'); 
const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.urlencoded({ extended : true }));
app.use(express.json());

require('./routes/swimmer.routes')(app);
require('./routes/competitions.routes')(app);
require('./routes/registration.routes')(app);

//config listen port 
db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Listen on port ${PORT}`)
    })
}); 

// because i want to use into server.specs for the moment, but i thinking is better try each conntroller
module.exports = server; 