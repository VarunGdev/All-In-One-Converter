const express = require('express');
const app = express();
const authAPI = require('./Routes/Auth.Routes')
const fileAPI = require('./Routes/File.Routes')
const conversionAPI = require('./Routes/conversion.Routes')

app.use(express.json)
app.use(require('cors'))

app.use('/api/v1/auth',authAPI)
app.use('/api/v1/files',fileAPI)
app.use('/api/v1/conversions',conversionAPI)

module.exports = app;