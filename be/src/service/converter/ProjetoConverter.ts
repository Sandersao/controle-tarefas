import ProjetoListarRequest from "../../http/request/ProjetoListarRequest";
import ProjetoModel from "../model/ProjetoModel";
import ProjetoResponse from "../response/ProjetoResponse";

export default class ProjetoConverter {
    public projetoListarRequestParaModel(
        request: ProjetoListarRequest
    ) {
        const model = new ProjetoModel()

        model.id = request.id
        model.nome = request.nome

        return model
    }

    public projetoModelParaResponse(
        modelList: Array<ProjetoModel>
    ) {
        return modelList
            .map((model: ProjetoModel) => {
                const response = new ProjetoResponse()

                response.id = model.id
                response.nome = model.nome

                return response
            })
    }
}