import express from "express";
const app = express()
app.use(express.urlencoded({extended: false}))
app.use(express.json())

export default class AppService {
    getApp() {
        return app
    }

    start(port: number) {
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
    }
}