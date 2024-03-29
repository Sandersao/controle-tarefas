import { Express, Request, Response } from "express"
import DefaultResponseBody from "../../service/response/DefaultResponseBody"

const defaultRouteMethod = (req: Request, res: Response) => {
    return new DefaultResponseBody(
        500,
        'Sem rota delimitada para este endereço'
    )
}

export default class RoutingService {
    private app: Express
    constructor(app: Express) {
        this.app = app
    }
    public get(
        path: string,
        callback?: Function
    ) {
        callback = callback ?
            callback : defaultRouteMethod

        return this.app
            .get(path, (req: Request, res: Response) => {
                let responseBody: DefaultResponseBody =
                    callback(req, res)
                res.status(responseBody.code)
                    .send(responseBody)
            })
    }
}