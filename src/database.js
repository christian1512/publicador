const mongoose = require('mongoose')
const URI=process.env.MONGODB_URI||'mongodb://localhost/testdb'

mongoose.connect(URI,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology: true
}).
catch(error => console.log(error))


const connection =mongoose.connection

connection.once('open',(err)=>{
   
    console.log('Database is connected')
})