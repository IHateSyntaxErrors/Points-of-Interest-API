const mongoose = require('mongoose');
const winston = require('winston');

// MongoDB connections
module.exports = () => {
    mongoose.connect(process.env["MONGODB_URI"], {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
        useCreateIndex: true,
        serverApi: ServerApiVersion.v1
    }).then(() => winston.info('MongoDB connected successfully!'))
}