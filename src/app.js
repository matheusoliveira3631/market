require('dotenv').config()
const express = require('express')
const productRouter = require('./routes/products.routes')
const employeeRouter = require('./routes/employees.routes')

const connect = require('./utils/connect')

const port = process.env.PORT

app=express()

//config
connect()
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
//routers
app.use('/products', productRouter)
app.use('/employees', employeeRouter)


//insert environmnet var with port

app.listen(port, ()=>{
    console.info(`express running at http://localhost:${port}`)
})
