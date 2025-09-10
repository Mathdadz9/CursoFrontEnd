import mongoose, { Document, Model, Schema } from "mongoose";


//defir a estrutura do obj
export interface ITarefa extends Document{
    titulo: string;
    concluida: boolean;
    criadaEm: Date;
}

// criar a Regra (Schema) do MongoDB

const TarefaSchema: Schema<ITarefa> = new mongoose.Schema({
    titulo:{
        type: String,
        required: [true,"O Título é obrigatório"],
        trim: true,
        maxlength:[50, "máximo de 50 char"]
    },
    concluida:{
        type: Boolean,
        default: false
    },
    criadaEm: {
        type: Date,
        default: Date.now 
    }
})

// export do modelo

const Tarefa: Model<ITarefa> = mongoose.models.Tarefa || mongoose.model<ITarefa>("Tarefa", TarefaSchema);

export default Tarefa;