const express=require('express');
const mongoose=require("mongoose")
const movies=require('../backend/models/moviemodel')
const movie=require('./routes/movie')
const app=express()
const cors=require('cors')
const PORT=process.env.PORT || 5500
require('dotenv').config();
app.use(express.json())
app.use(cors())

app.get('/',async(req,res)=>{
    const products=await movies.find({})
    res.json({
        success:true,
        products
    })
})
app.use('/api/v1/',movie)

mongoose.set('strictQuery',true);
mongoose.connect(process.env.MONGO_DB).then(()=>{
    console.log("MongoDB Connected");
}).catch((err)=>{
    console.log(err.stack);
})

app.listen(PORT,()=>{
    console.log(`Local Host Succesfully${PORT}`)
})









