import axios from "axios"

const url:string = "https://dirttoschool.onrender.com"

export const createUser  = async(data:any) =>{
try {
    return await axios.post(`${url}/api/create`,data).then ((res:any)=>{
        return res.data.data 
    })
} catch (error) {
    console.log(error)
}
}

export const SigninUser = async(data:any)=>{
try {
    return await axios.post(`${url}/sign-in`,data).then((res:any)=>{
        return res.data.data
    })
} catch (error) {
    console.log(error)
}
}