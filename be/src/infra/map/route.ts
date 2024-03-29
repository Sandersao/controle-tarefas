import { Express, Request } from "express";
import RoutingService from "../service/RoutingService";
import makeProjetoController from "../factory/makeProjetoController";

export default (app: Express) =>{
    const route = new RoutingService(app)

    route.get('/')

    route.get('/projeto', (req: Request) =>{
        return makeProjetoController()
            .listar(req)
    })
}