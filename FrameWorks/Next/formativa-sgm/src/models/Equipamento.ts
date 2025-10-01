import mongoose, { Document, Model, Schema } from "mongoose";

// Interface - modelagem do Equipamento
export interface IEquipamento extends Document {
    _id: string;
    modelo: string;
    marca: string;
    numSerie: string;
    status: "ativo" | "manutencao" | "inativo";
    localizacao: string;
}

// Schema - construtor
const EquipamentoSchema: Schema<IEquipamento> = new Schema({
    modelo: { type: String, required: true },
    marca: { type: String, required: true },
    numSerie: { type: String, required: true, unique: true },
    status: { type: String, enum: ["ativo", "manutencao", "inativo"], default: "ativo" },
    localizacao: { type: String, required: true }
});

// Model - reutilizável
const Equipamento: Model<IEquipamento> = mongoose.models.Equipamento
    || mongoose.model<IEquipamento>("Equipamento", EquipamentoSchema);

export default Equipamento;
