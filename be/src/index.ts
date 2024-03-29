import server from "./infra/config/server";
import route from "./infra/map/route";
import AppService from "./infra/service/AppService";

const appService = new AppService()

route(appService.getApp())

appService.start(server.port)