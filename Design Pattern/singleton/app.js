import AppConfig from "./app-config.js";

const appConfig = AppConfig.getInstance();

appConfig.fetchData();

console.log("---- 1˚ CONSULTA REALIZADA! ----")

const appConfig2 = AppConfig.getInstance();

appConfig2.fetchData();

console.log("---- 2˚ CONSULTA REALIZADA! ----")