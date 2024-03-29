import DefaultResponseBody from "../../service/response/DefaultResponseBody";

export default class Controller {
    protected prepareResponse(
        code: number,
        message: string,
        data: object | Array<any> | null = null
    ) {
        return new DefaultResponseBody(
            code,
            message,
            data
        )
    }
}