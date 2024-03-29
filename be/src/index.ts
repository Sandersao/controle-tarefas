import route from "./infra/config/route";
import AppService from "./infra/service/AppService";

const appService = new AppService()

route(appService.getApp())

appService.start(8080)