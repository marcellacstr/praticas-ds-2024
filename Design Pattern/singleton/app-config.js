class AppConfig {

    constructor() {
        if(AppConfig.instance){
            return AppConfig.instance;
        }
        this.apiKey = "HJHDS123213JHHGFJKJ";
        this.apiUrl = "https://mock.com.br";

        this.connect();

        AppConfig.instance = this;
    }

    static getInstance() {
        if(!AppConfig.instance){
            AppConfig.instance = new AppConfig();
        }
        return AppConfig.instance;
    }

    connect() {
        console.log("Conectando com a servidor de API")
    }

    setApiUrl(apiUrl) {
        this.apiUrl = apiUrl
    }

    fetchData() {
        if(!this.apiUrl){
            throw new Error("Url é obrigátorio!");
        }
        console.log("Realizando consultas na api ......")
    }
}

export default AppConfig;