import express from 'express'

//crear la app
const app = express();

//Routing 
app.user('/auth',usuarioRoutes)

//Definir un puerto y arrancar el proyecto 
const port = 3000
app.listen(port,() =>{

    console.log(`El servidor esta funcinando en el puerto: ${port}`)
}) 