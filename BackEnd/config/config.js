
import {connect } from "mongoose"

connect("mongodb+srv://rauffaaf206:rauf2005@cluster0.vm11o.mongodb.net/")
.then(()=>{
    console.log("connected")
})