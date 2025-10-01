import OrdemServico, { IOrdemServico } from "@/models/OrdemServico";
import connectMongo from "@/services/mongodb";

// GET all ordens de serviço
export const getAllOrdemServico = async () => {
    await connectMongo();
    const ordens = await OrdemServico.find([]);
    return ordens;
};

// GET one ordem de serviço by ID
export const getOneOrdemServico = async (id: string) => {
    await connectMongo();
    const ordem = await OrdemServico.findById(id);
    return ordem;
};

// CREATE new ordem de serviço
export const createOrdemServico = async (data: Partial<IOrdemServico>) => {
    await connectMongo();
    const novaOrdem = new OrdemServico(data);
    const novaOrdemId = await novaOrdem.save();
    return novaOrdemId;
};

// UPDATE ordem de serviço
export const updateOrdemServico = async (id: string, data: Partial<IOrdemServico>) => {
    await connectMongo();
    const ordemAtualizada = await OrdemServico.findByIdAndUpdate(id, data, { new: true });
    return ordemAtualizada;
};

// DELETE ordem de serviço
export const deleteOrdemServico = async (id: string) => {
    await connectMongo();
    await OrdemServico.findByIdAndDelete(id);
};
