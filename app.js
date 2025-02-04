const express = require('express')
const cors = require('cors')
const app = express();

var corOption={
    origin:'https://localhost:8081'
}

//middleware
app.use(cors(corOption))
app.use(express.json())
app.use(express.urlencoded({extended:true}))


// routers
const router = require('./routes/productRouter.js')
app.use('/api/products', router)

//testing api

// app.get('/',(req,res)=>{
//     res.json({messeage: 'hello from api'})
// })


//port
const PORT = process.env.PORT || 8080;

//server
app.listen(PORT,()=>{
    console.log(`server is running port ${PORT}`)
})