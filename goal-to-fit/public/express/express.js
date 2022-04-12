const express = require("express");
const path = require("path");

const app = express();

const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}

//init middleware
//app.use(logger);

//Body parse
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/users', require('./user'));


// Set static folder
app.use(express.static(path.join(__dirname)));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is runing on port ${PORT}`));