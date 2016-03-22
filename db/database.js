var mongoose = require('mongoose');
var connectionString = 'mongodb://localhost/britney_ipsum';

mongoose.connect(connectionString);

mongoose.connection.on('connected', function(){
  console.log("It's Britney, bitch!");
});

mongoose.connection.on('error', function(err){
  console.log(err);
});

mongoose.connection.on('disconnected', function(){
  console.log('Bye bye');
});
