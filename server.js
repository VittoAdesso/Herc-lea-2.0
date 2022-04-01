const express = require('express');
const db = require('./models'); 
const PORT = process.env.PORT || 4000;

const app = express();

//config listen port 
db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Listen on port ${PORT}`)
    })
}); 