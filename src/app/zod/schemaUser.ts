import {z} from "zod"

export const schemaUser = z.object({
    name:z.string().min(3,{message:"Check name"}),
    email:z.string().email({ message: "Invalid email address" }),
    password: z.string().trim().min(8, { message: "Must be 8 or fewer characters long" })
})