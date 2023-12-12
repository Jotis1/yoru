import mongoose from "mongoose";

export const connect = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}`);

        console.log("Conexión a la base de datos exitosa");
    } catch (error: any) {
        console.log("Ha ocurrido un error al conectar a la base de datos");
        console.log(error);
    }
}