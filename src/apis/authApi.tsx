import axios from "axios"

const url:string = "https://dirttoschool.onrender.com"
// const url:string = "https://8023-129-205-124-243.ngrok.io"

export const createUser  = async(data:any) =>{
try {
    return await axios.post(`${url}/api/create`,data).then ((res:any)=>{
        return res.data.data 
    })
} catch (error) {
    console.log(error)
}
}

export const signinUser = async(data:any)=>{
try {
    return await axios.post(`${url}/api/sign-in`,data).then((res:any)=>{
        return res.data.data
    })
} catch (error) {
    console.log(error)
}
}