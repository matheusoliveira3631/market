const mongoose=require('mongoose')
const schema=mongoose.Schema

const employeeSchema=new schema({
    name:{
        type:String,
        required:true,
    },
    surname:{
        type:String,
        required:true
    },
    employee_id:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true,
    },
    office:{
        type:String,
        required:true
    },
    wage:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const employee= mongoose.model('employee', employeeSchema)

module.exports = employee