const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  subject: {type: String, required: 'A subject is required for requests'},
  content: {type: String, maxlength: 320}
});

module.exports = mongoose.model('Request', requestSchema);
