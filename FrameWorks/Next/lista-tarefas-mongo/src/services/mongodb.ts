

// Pega a String de Conexão nas Variaveis de Ambente do Projeto(Environment)

import mongoose from "mongoose";
import { cache } from "react";

//transforma texto em uma endereço URL (URI)
const MONGODB_URI = process.env.DATABASE_URL;

if (!MONGODB_URI) {
    throw new Error("Defina o DATABASE_URL no .env.local");
}
// cache do sistema 
let cached = (global as any).mongoose;

if (!cached) {
    cached = (global as any).mongoose = { conn: null, promise: null };
}

async function connectMongo() {
    //Verificar se Conexão já existe, se já existe retorna a propria conexão
    if (cached.conn) return cached.conn;
    if (!cached.promise) { //isso é nulo
        const aguard = { bufferCommands: false };
        //crio uma promissa de conexão
        cached.promise = mongoose.connect(MONGODB_URI!, aguard)
            .then((mongoose) => {
                console.log("Conectado ao Mongo");
                return mongoose
            });
    }
    //aguardar a conexão ser criada
    try {
        //cria a conexão a partir da promessa que estava pendente
        cached.conn = await cached.promise;
    } catch (error) {
        //se conexão falhar
        cached.promise = null;
        throw error; //lança o erro para o view
    }

    return cached.conn;
}
//transforma em um componente reutilizável
export default connectMongo;

//1º Passo criar o endereço de conexão 
//2º Passo criar o cached para armazenar as conexões ao longo do projeto
//3º Passo verificar se já existe uma conexão estabelecida com DB
//4º verica se não existe uma promessa de conexão , e cria uma promise
//5º com a promise criada, estabele uma conexão com o banco



