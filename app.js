const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./utill/database');
const userRouter = require('./routes/user');

const cors = require('cors');
const app = express();

app.use(cors())

app.use(bodyParser.json({ extended: false }));

app.use('/user',userRouter);


sequelize.sync()
.then((result) => {
    app.listen(3000);
})
.catch(err => console.log(err));







