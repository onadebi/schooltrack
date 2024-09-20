const appsettings = {
    appName: 'XRay GateKeeper',
    env: 'development',
    Urls: {
        baseUrl: 'http://localhost:8080/api/v2/xray/',
    },
    functions: {
        ToSentenceUpper(text: string) {
            return text[0].toUpperCase() + text.slice(1);
        },
        NumberCommaFormat :(x: number)=> {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    },
    token:{
        authName: 'xray-token'
    },
};

export default appsettings;