const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(express.json());

const answerRouter = require('./routes/rat');

app.use('/rat', answerRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});