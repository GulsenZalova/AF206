
import {ProductModel} from "../models/ProductModel.js"


export const ProductController={
    getAll: async (req,res)=>{
        let products= await ProductModel.find()
        res.send(products)
    },
    getById: async (req,res)=>{
        let id=req.params.id
        let myproduct= await ProductModel.findById(id)
        res.send({
            message:"Success GetById",
            data:myproduct
        })
    },
    deleteProduct:async  (req,res)=>{
        let {id}=req.params
       await ProductModel.findByIdAndDelete(id)
       res.send({
        message:"Success Delete",
    })
    },
    postProduct: async (req,res)=>{
        let newProduct= ProductModel(req.body)
       await newProduct.save()
       res.send({
         message:"Success Post",
         data:req.body
       })
    },
    updateProduct: async (req,res)=>{
        let id=req.params.id
        let updateProduct=req.body
      let updatedProduct = await ProductModel.findByIdAndUpdate({_id:id},updateProduct,{new:true})
        res.send(updatedProduct)
    }
}



