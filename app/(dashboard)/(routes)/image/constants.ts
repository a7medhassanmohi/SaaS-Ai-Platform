import {z} from "zod"
export const formSchema = z.object({
    prompt: z.string().min(1, {
      message: "Photo Prompt is required."
    }),
    amount: z.string().min(1),
    resolution: z.string().min(1),
  });

  export const amountOptions = [
    {
      value: "1",
      label: "1 Photo"
    },
  
  ];
  
  export const resolutionOptions = [
    {
      value: "256x256",
      label: "256x256",
    },
    {
      value: "512x512",
      label: "512x512",
    },
  ];
  
  

export type formSchemaType= z.infer<typeof formSchema >