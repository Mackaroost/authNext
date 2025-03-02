"use server"

export async function registerAction(formData: FormData){
try {
const rawData = {
    name: formData.get("name"),
    email:formData.get("email"),
    password:formData.get("password")

}
console.log(rawData)
    
} catch (error) {
    console.log(error)
}


}