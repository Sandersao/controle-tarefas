import ProjetoModel from "../model/ProjetoModel";

export default class ProjetoRepository {
    public listar(modelFilter: ProjetoModel) {
        return [
            new ProjetoModel(1, 'ACESSUAS'),
            new ProjetoModel(2, 'SISC')
        ]
            .filter((model: ProjetoModel) => {
                if (modelFilter.id) {
                    return model.id == modelFilter.id
                }
                return true
            })
            .filter((model: ProjetoModel) => {
                if (modelFilter.nome) {
                    const nomeModel = model
                        .nome
                        ?.toLowerCase()
                    const nomeFilter = modelFilter
                        .nome
                        ?.toLowerCase()
                    return nomeModel == nomeFilter
                }
                return true
            })
    }
}