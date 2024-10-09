import appsettings from "../../config/appsettings";

export default class CommonService{

    error: string | null = null;
    token: string | null = window.localStorage.getItem('jwt');
    appLoaded = false;

    LogError = (error: string, obj: object | string |undefined)=>{
        if(obj){
            console.error(`[${appsettings.appName}] ERROR :`,error, obj);
        }else{
            console.error(`[${appsettings.appName}] ERROR :`,error);
        }
    }
    
    LogActivity = (error: string, obj: object | undefined)=>{
        if(obj){
            console.log(`[${appsettings.appName}] INFO :`,error, obj);
        }else{
            console.info(`[${appsettings.appName}] INFO :`,error);
        }
    }

    setServerError = (error: string)=>{
        this.error = error;
    }

    setToken =(token: string | null)=>{
        this.token = token;
    }

    setAppLoaded =()=>{
        this.appLoaded = true;
    }

}