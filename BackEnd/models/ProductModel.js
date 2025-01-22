import { Schema, model } from "mongoose"


let ProductSchema = new Schema({
    name:String,
    price:Number,
    image:String
})

export let ProductModel= model("arrivals",ProductSchema)