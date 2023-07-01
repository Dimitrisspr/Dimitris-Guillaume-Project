const mongoose = require('mongoose');
require('dotenv').config();
const URI = process.env.SERVER_URI;

main()
   .then(()=> console.log('database connected'))
   .catch((err)=> console.log(err));

async function main() {
 await mongoose.connect(URI);
}

module.exports = main;