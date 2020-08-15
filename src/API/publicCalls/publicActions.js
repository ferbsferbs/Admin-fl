import { postRequest, getRequestToken } from "../request/serverCall"

export default {
    login,verify
}

function login(user,pass){
   return postRequest("/usuarios/iniciar",{usuario:user,password:pass}).then(res=>{
        return res
    })
}

function  verify(){
    return getRequestToken("/usuarios/verify")
 }
 
 