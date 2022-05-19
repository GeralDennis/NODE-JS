const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const memberSchema = new Schema({
    firstName: String,
    lastName: String
});
const Member = mongoose.model("member", memberSchema);

mongoose.connect("mongodb://my_user:my_pwd@localhost:27017/NODOS", { useNewUrlParser: true });
const http = require('http');
http.createServer((req, res) => {
    Member.find({}, "firstName lastName").then(INVERNADERO1 => {
        if (INVERNADERO1 !== null && INVERNADERO1.length > 0) {
            res.write(JSON.stringify(INVERNADERO1));
        } else {
            res.write("No members found");
        }
        res.end();
    });
}).listen(8001);
