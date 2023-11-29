const {Sequelize} = require('sequelize')
require('dotenv').config({path:'variables.env'})

const db = new Sequelize(process.env.BASE_URL,{
    host:process.env.BD_HOST,
    port:process.env.BD_PORT,
    dialect :'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false 
        },
    },
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    },
    
})
 
module.exports ={ 
    db
}