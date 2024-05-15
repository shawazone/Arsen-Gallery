// models.js

const mongoose = require('mongoose');

const paintingSchema = new mongoose.Schema({

  name: { 
    type: String, 
    required: true 
},

  description: { 
    type: String,
     required: true
     },

  poem:  { 
    type: String 

  },
  price: { 
    type: Number,
     required: true
     },

  image: { 
    type: String, 
    required: true
 },
  // You can add more fields as needed
});

const Painting = mongoose.model('Painting', paintingSchema);

module.exports = Painting;
