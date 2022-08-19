const mongoClient = require("mongodb").MongoClient;
require("dotenv").config();
const state = {
  db: null,
};
module.exports.connect = (done) => {
  const url = 'mongodb+srv://admin:admin123@cluster0.rq2ns.mongodb.net/myFirstDatabase2?retryWrites=true&w=majority';
  const dbname = 'myFirstDatabase2';

  mongoClient.connect(url,  { useUnifiedTopology: true }, (err, data) => {
    if (err) return done(err);
    state.db = data.db(dbname);
    done();
  });
};

module.exports.get = () => {
  return state.db;
};
