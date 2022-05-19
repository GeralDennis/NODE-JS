const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');https://github.com/GeralDennis/NODE-JS/blob/main/server.js

// fetches root files from client/build
//app.use(express.static(path.join(__dirname, 'client', 'build')));

// May only be exist once in app
mongoose.connect("mongodb://my_user:my_pwd@localhost:27017/NODOS", { useNewUrlParser: true });

const Schema = mongoose.Schema;
const memberSchema = new Schema({
    firstName: String,
    lastName: String
});
const Member = mongoose.model("member", memberSchema);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/favicon.ico', (req, res) => {
    res.sendFile(path.join(`${__dirname}/favicon.ico`));
});

app.get('/members', (req, res) => {
    Member.find({}, "firstName lastName").then(INVERNADERO1 => {
        if (INVERNADERO1 !== null && INVERNADERO1.length > 0) {
            res.write(JSON.stringify(INVERNADERO1));
        } else {
            res.write("No members found");
        }
        res.end();
    });
}).listen(8000);
