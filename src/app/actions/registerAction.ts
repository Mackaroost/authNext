"use server";
import { schemaUser } from "../zod/schemaUser";

export async function registerAction(formData: FormData) {
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const results = schemaUser.safeParse(rawData);

  if (!results.success) {
    const errors = results.error.errors.map((error) => error.message);
    return { success: false, errors };
  }

  return { success: true };
}
