const mongoose = require('mongoose');
const password = encodeURIComponent(process.env.DB_PASSWORD);

// const url = `mongodb+srv://${process.env.DB_USER}:${password}@cluster0.rp8fj.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const url = `mongodb+srv://${process.env.DB_USER}:${password}@cluster0.rp8fj.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`; 
// const url = `mongodb+srv://${process.env.DB_USER}:${password}@cluster0.rp8fj.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`; 

mongoose.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

const dbConn = mongoose.connection;

dbConn.on("error", console.error.bind(console, "Connestion Error"));
dbConn.on("open", function () {
    console.log("DB connection successful");
});

module.exports = dbConn;