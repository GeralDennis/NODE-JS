const dbConnect = require('./mongodb');

const insertData = async() =>{
    let data = await dbConnect();
    data.insert(
        { firstName: "Bill", lastName: "Smith" }
    )
}

insertData();
