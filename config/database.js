const mongoose = require('mongoose');



mongoose.connect('mongodb://localhost/events', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


const db = mongoose.connection;

// database connection event
db.on('connected', function () {
  console.log(`Mongoose connected to: ${db.host}:${db.port}`);
});
