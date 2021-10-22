const mongoose = require('mongoose');
mongoose.connect('mongodb://user8:root@54.173.202.133:27017/base8?authSource=admin')
.then(()=>console.log("Conexion exitosa"))
.catch(err=>console.log(err))

const LugarSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre:{
        type:String,
        required: true
    },
    pais:{
        type:String,
        required: true
    },
    descripcion:{
        type:String,
        required: false
    },
    contador:{
        type:Number,
        required: true
    },
},{collection:'Lugar'})

const Lugar = mongoose.model('Lugar', LugarSchema);

const lugar = new Lugar({
    nombre: "Chinconcuac",
    pais: "México",
    descripcion: "Comida sabrosa",
    contador: 1,
    _id:new mongoose.Types.ObjectId()
})



Lugar.findOne()
    .then(resultado=>{
        console.log(resultado.nombre)
    })
    .catch(err=>console.log(err))

    async function actualizar(){
        try{
            let lug= await Lugar.findOne({nombre:lugar.nombre})
            let contB = await lug.contador+1;
            await Lugar.findOneAndUpdate({nombre:lugar.nombre},{contador:contB})           
            
            console.log(lug)

        }catch(err){
            console.log(err)
        }
    }

    actualizar()


Lugar.find({pais: "México"})
    .then(resultado=>{
        console.log(resultado)
    })
    .catch(err=>console.log(err))
