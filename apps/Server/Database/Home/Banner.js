import mongoose from "mongoose"

const BannerSchema=new mongoose.Schema({
   Banner:[
    {
      name:{ type:String },
      img:{type:String}
    }
   ],
   Catalog:[
    {
      img:{type:String}
    }
   ],
})
const Banner=mongoose.model("BannerSchema",BannerSchema)
export {Banner}