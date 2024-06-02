const mongoose=require("mongoose")

const schema=new mongoose.Schema(
    {
        title:String,
        year:String,
        rated:String,
        released:String,
        runtime:String,
        genre:String,
        director:String,
        actors:String,
        plot:String,
        language:String,
        country:String,
        awrds:String,
        poster:String,
        indbrat:String,
        movimg:String,
        images:[
            { image:String}
        ]
    }
)

const moviemodel=mongoose.model('movie',schema);
module.exports=moviemodel;
