const express=require('express');
const mongoose=require("mongoose")
const movies=require('../backend/models/moviemodel')
const movie=require('./routes/movie')
const app=express()
const cors=require('cors')

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


mongoose.connect(process.env.MONGO_DB).then(()=>{
    console.log("MongoDB Connected");
}).catch((err)=>{
    console.log(err.stack);
})

app.listen(process.env.PORT,()=>{
    console.log(`Local Host Succesfully${process.env.PORT}`)
})









