require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();
const cors = require('cors');

app.use(cors());
const envoronment = process.env.NODE_ENV;
const stage = require('./config.js')[envoronment];


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended : true
}));

if(envoronment !== 'production'){
    app.use(logger('dev'));
}

const routes = require('./routes/index.js');

app.use('/api/v1',routes(router));

// app.use('/api/v1',(req,res,next) => {
//     res.send("hello");
//     next();
// })

app.listen(`${stage.port}`,() => {
    console.log(`Server now listening at localhost:${stage.port}`);
});

module.exports = app;