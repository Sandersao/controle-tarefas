import ProjetoController from "../../http/controller/ProjetoController"
import ProjetoBusiness from "../../service/business/ProjetoBusiness"
import ProjetoConverter from "../../service/converter/ProjetoConverter"
import ProjetoRepository from "../../service/repository/ProjetoRepository"

const projetoController =
    new ProjetoController(
        new ProjetoBusiness(
            new ProjetoRepository(),
            new ProjetoConverter()
        )
    )
export default () => {
    return projetoController
}