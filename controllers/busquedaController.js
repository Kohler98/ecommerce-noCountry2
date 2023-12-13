const { response } = require("express")

const busquedaProducto = async(req,res=response)=>{
    console.log(req.query)
}

module.exports = {
    busquedaProducto
}