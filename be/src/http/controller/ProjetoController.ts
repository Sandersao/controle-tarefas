import { Request } from "express";
import ProjetoBusiness from "../../service/business/ProjetoBusiness";
import ProjetoListarRequest from "../request/ProjetoListarRequest";
import Controller from "./Controller";

export default class ProjetoController extends Controller {
    private projetoBusiness: ProjetoBusiness

    constructor(projetoBusiness: ProjetoBusiness) {
        super()
        this.projetoBusiness =
            projetoBusiness

    }

    public listar(req: Request) {
        const request =
            new ProjetoListarRequest(req)

        return super.prepareResponse(
            200,
            "Listagem de projetos recuperada com sucesso",
            this.projetoBusiness
                .listar(request)
        )
    }
}