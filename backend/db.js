const mongoose=require("mongoose");
const { boolean } = require("zod");
mongoose.connect("mongodb+srv://Warrior07A:uhijtsCZLxaHdx0n@cluster0.ru0uizx.mongodb.net/")
const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:boolean
})

const todo = mongoose.model('todos',todoSchema);
module.exports={
    todo
}