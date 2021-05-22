const bcrypt = require('bcrypt')

const hashPassword = async function(plainTextPassword,callback){
    bcrypt.hash(plainTextPassword, 10).then((hash)=>{
        callback(hash)
    })
}

const checkPassword = async function(plainTextPassword, hash, callback){
    bcrypt.compare(plainTextPassword, hash).then((result)=>{
        callback(result)
    })
}

module.exports= {hashPassword, checkPassword}