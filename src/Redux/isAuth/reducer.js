import { isAuth } from "./action";

const init = {isAuth:false}

export const isAuthhandler=(store=init,{type,payload})=>{
    switch(type){
        case isAuth :
            return {...store,isAuth:!payload}
        default:
            return store
    }
}