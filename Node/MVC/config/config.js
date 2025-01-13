
import {connect } from "mongoose"

connect("mongodb+srv://zalova0202:af2060202@af206.o1xya.mongodb.net/")
.then(()=>{
    console.log("connected")
})