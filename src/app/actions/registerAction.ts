"use server";
import { schemaUser } from "../zod/schemaUser";
import bcrypt from "bcryptjs";

interface actionState {
  errors: string[]
  success: string
}

export async function registerAction(prevState: actionState, formData: FormData) {
  const rawData = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  // Validamos los datos con Zod
  const results = schemaUser.safeParse(rawData);

  if (!results.success) {
    const errors = results.error.errors.map((error) => error.message);
    return { 
             errors,
             success:''
     };
  }

  // Hasheamos la contraseña
  const hashedPassword = await bcrypt.hash(rawData.password, 10);
  

 try {
  // Enviamos los datos a la API
 // console.log(process.env.NEXT_PUBLIC_API_URL);
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/auth/signUp`;
  //console.log(url)
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name:rawData.name,
      email:rawData.email,
      password: hashedPassword
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    return { errors: [data.error || "Error en el registro"], success: "" };
  }

  return { errors: [], success: "Usuario registrado con éxito" };

} catch (error) {
  return { errors: ["Error al conectar con el servidor"], success: "" };
}
  return { errors: prevState.errors,
           success:prevState.success
         };
}
