import Equipamento, { IEquipamento } from "@/models/Equipamento";
import connectMongo from "@/services/mongodb";

// GET all equipamentos
export const getAllEquipamento = async () => {
    await connectMongo();
    const equipamentos = await Equipamento.find([]);
    return equipamentos;
};

// GET one equipamento by ID
export const getOneEquipamento = async (id: string) => {
    await connectMongo();
    const equipamento = await Equipamento.findById(id);
    return equipamento;
};

// CREATE new equipamento
export const createEquipamento = async (data: Partial<IEquipamento>) => {
    await connectMongo();
    const novoEquipamento = new Equipamento(data);
    const novoEquipamentoId = await novoEquipamento.save();
    return novoEquipamentoId;
};

// UPDATE equipamento
export const updateEquipamento = async (id: string, data: Partial<IEquipamento>) => {
    await connectMongo();
    const equipamentoAtualizado = await Equipamento.findByIdAndUpdate(id, data, { new: true });
    return equipamentoAtualizado;
};

// DELETE equipamento
export const deleteEquipamento = async (id: string) => {
    await connectMongo();
    await Equipamento.findByIdAndDelete(id);
};
