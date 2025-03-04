"use server";
import { schemaUser } from "../zod/schemaUser";
import bcrypt from "bcryptjs";

interface actionState {
  errors: string[] | undefined;
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
    return { errors };
  }

  // Hasheamos la contraseña
  const hashedPassword = await bcrypt.hash(rawData.password, 10);
  

 try {
  // Enviamos los datos a la API
  const url = `http://localhost:3000/api/auth/signUp`;
console.log(url)
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
    return { errors: [data.message] };
  }
} catch (error) {
 console.log(error);
}
  return { errors: [] };
}
