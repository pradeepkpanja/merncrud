//loading env variables
if(process.env.PORT != "production"){
    require('dotenv').config();
}
const mongoose = require('mongoose');


async function connectToDb(){
   try{
    await mongoose.connect(process.env.DB_URL);
    console.log("Database Connected ");
   }catch(error){
    console.log(error);
   }
}

module.exports = connectToDb