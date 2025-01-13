import express from "express"
const app=express()
import { json } from "body-parser"
import cors from "cors"
import { config } from "dotenv"
import { Schema, model, connect } from "mongoose"

app.use(json())
app.use(cors())
config()


app.get("/",(req,res)=>{
     res.send("Welcome Node")   
})


let ProductSchema = new Schema({
    name:String,
    description:String,
    price:Number,
    isSale:Boolean,
    image:String
})

let ProductModel= model("products",ProductSchema)



app.get("/products", async (req,res)=>{
    let products= await ProductModel.find()
    res.send(products)
})

app.get("/products/:id",async (req,res)=>{
    let id=req.params.id
    let myproduct= await ProductModel.findById(id)
    res.send({
        message:"Success GetById",
        data:myproduct
    })
})


app.delete("/products/:id", async  (req,res)=>{
    let {id}=req.params
   await ProductModel.findByIdAndDelete(id)
   res.send({
    message:"Success Delete",
})
})

app.post("/products", async (req,res)=>{
    let newProduct= ProductModel(req.body)
   await newProduct.save()
   res.send({
     message:"Success Post",
     data:req.body
   })
})


app.put("/products/:id", async (req,res)=>{
    let id=req.params.id
    let updateProduct=req.body
  let updatedProduct = await ProductModel.findByIdAndUpdate({_id:id},updateProduct,{new:true})
    res.send(updatedProduct)
})

connect(process.env.ConnetionString)
.then(()=>{
    console.log("connected")
})

app.listen(3000,()=>{
    console.log("bu app 3000 portunda dinlenilir")
})