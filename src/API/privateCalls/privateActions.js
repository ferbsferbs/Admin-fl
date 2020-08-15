import {  getRequestToken, postRequestToken,putRequestToken,deleteRequestToken } from "../request/serverCall"




const countAlumnos=()=>{
    return getRequestToken("/stats/count/alumnos").then(res=>{
        return res
    })
}

const listAlumnos=(page,size)=>{
    return getRequestToken("/stats/list/alumnos?page="+page+"&size="+size).then(res=>{
        return res
    })
}

const dashboardCombo=()=>{
    return getRequestToken("/stats/combo/dashboard").then(res=>{
        return res
    })
}


const listDocentes=(page,size,roleId="")=>{
    return getRequestToken("/stats/list/docentes/"+roleId+"?page="+page+"&size="+size).then(res=>{
        return res
    })
}


const listSponsors=(page,size)=>{
    return getRequestToken("/sponsor/?page="+page+"&size="+size).then(res=>{
        return res
    })
}

const AddSponsors=(obj)=>{
    return postRequestToken("/sponsor",obj).then(res=>{
        return res
    })
}

const AsignarSponsors=(docente,sponsor)=>{
    return putRequestToken(`/usuarios/docentes/${docente}/${sponsor}`).then(res=>{
        return res
    })
}


const QuitarPremium=(docente,sponsor)=>{
    return deleteRequestToken(`/usuarios/docentes/${docente}/${sponsor}`).then(res=>{
        return res
    })
}


export default{
    countAlumnos,listAlumnos,dashboardCombo,listDocentes,listSponsors,AddSponsors,AsignarSponsors,QuitarPremium
}