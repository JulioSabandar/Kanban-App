require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const router = require('./routes/index');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(router);
app.listen(port, ()=> {
    console.log('Listening on port ', port);
});