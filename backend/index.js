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
mongoose.connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000, // Increase the timeout to 30 seconds
    socketTimeoutMS: 45000 // Increase the timeout to 45 seconds
  }).then(() => {
    console.log('Connected to MongoDB');
  }).catch(err => {
    console.error('Error connecting to MongoDB', err);
  })

app.listen(PORT,()=>{
    console.log(`Local Host Succesfully${PORT}`)
})









