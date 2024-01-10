import {z} from "zod"
export const formSchema = z.object({
    prompt: z.string().min(1, {
      message: "video is required."
    }),
  });
  

export type formSchemaType= z.infer<typeof formSchema >