import { Request } from "express";

export default class ProjetoListarRequest {
    public id: number
    public nome: string

    constructor(req: Request) {
        this.id = req
            .query
            .id as unknown as number
        this.nome = req
            .query
            .nome as string
    }
}