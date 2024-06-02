const movie=require('../models/moviemodel');

exports.getMovie=async(req,res,next)=>{
    try{
        console.log(req.params.id,'ID');
        const products=await movie.findById((req.params.id))
    res.json({
        success:true,
        products
    })
    }catch(error){
        res.status(404). json({
            success:true,
            message:"Unable to get Movie that ID"
        })
    }
    
}