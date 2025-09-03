// montar o schema da tabela 

import { kMaxLength } from "buffer";
import { create } from "domain";
import mongoose from "mongoose";
import { type } from "os";
import { title } from "process";

//function para definir o schema
const TodoSchema = new mongoose.Schema({
    title:{ 
        type: String, 
        required:[true,"O título é Obrigatório"],
        trim: true, // remove os espaços em branco
        maxlength: [100, "não pode mais de 100char"] //limite de caracteres
        },
    completed:{
        type: Boolean,
        default: false, 
    },
    createdAt:{
        type: Date,
        default: Date.now, //data atual 
    }
});
    
export default TodoSchema; 
