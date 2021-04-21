const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let books = new Schema ({
    bookId :  { type: String, trim: true },
    title :  { type: String, trim: true },
    thumbnail :  { type: String },
    link :  { type: String }
}, {
   timestamps: true 
});

module.exports = mongoose.model('books', books);