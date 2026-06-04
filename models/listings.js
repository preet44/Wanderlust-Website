const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const Review=require("./review.js");

const listing_Schema=new Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
    image:{
        filename:{
            type:String,
        },
        url:{
            type:String,
    }},
    price:{
        type:Number,
    },
    location:{
        type:String,
    },
    country:{
        type:String,
    },
    review:[
        {
            type:Schema.Types.ObjectId,
            ref:"Review",

        }
    ],
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User",
    },
    category:{
        type:String,
        enum:["Mountains","Pools","Boats","Dome","Camping","Snow","Beach","Cities"]

    },
});

listing_Schema.post("findOneAndDelete", async(listing)=>{
    if(listing){
    await Review.deleteMany({_id:{ $in:listing.review}});
}});

const Listing=mongoose.model("Listing",listing_Schema);
module.exports=Listing;