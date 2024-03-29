import ProjetoListarRequest from "../../http/request/ProjetoListarRequest";
import ProjetoConverter from "../converter/ProjetoConverter";
import NotFoundException from "../exception/NotFoundException";
import ProjetoRepository from "../repository/ProjetoRepository";

export default class ProjetoBusiness {
    private repository: ProjetoRepository
    private converter: ProjetoConverter
    constructor(
        repository: ProjetoRepository,
        converter: ProjetoConverter
    ) {
        this.repository = repository
        this.converter = converter
    }
    public listar(request: ProjetoListarRequest) {
        const modelFilter = this
            .converter
            .projetoListarRequestParaModel(request)

        const modelList = this
            .repository
            .listar(modelFilter)

        if (modelList.length == 0) {
            throw new NotFoundException(
                "Listagem de projetos não encontrado"
            );
        }

        return this.
            converter
            .projetoModelParaResponse(modelList)
    }
}