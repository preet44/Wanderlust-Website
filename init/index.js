require("dotenv").config({ path: "../.env" });
console.log(process.env.ATLASDB_URL);

const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing=require("../models/listings.js");

const db_url=process.env.ATLASDB_URL;
main()
.then(()=>{console.log("connected successfully")})
.catch((err)=>{console.log(err)});
        async function main() {
    await mongoose.connect(db_url);
    }

const initDB=async()=>{
    await Listing.deleteMany({});
    initData.data=initData.data.map((obj)=>({...obj,owner:"6a1ec7c1798db787ffcd6db8"}));
    await Listing.insertMany(initData.data);
    console.log("data was initalized");
}
initDB();

