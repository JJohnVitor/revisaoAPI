import mongoose from "mongoose";




async function conectaNobanco(){
    // string de conexão, mongoose conecta o bancon de dados a aplicação
    mongoose.connect(process.env.DB_CONNECTION_STRING)

    return mongoose.connection;
}



export default conectaNobanco





