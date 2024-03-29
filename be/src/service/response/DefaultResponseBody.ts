export default class DefaultResponseBody {
    public code: number
    public message: string
    public data: object | Array<any> | null

    constructor(
        code: number = 500,
        message: string = 'No data set to the response body',
        data: object | Array<any> | null = null
    ) {
        this.code = code
        this.message = message
        this.data = data
    }
}