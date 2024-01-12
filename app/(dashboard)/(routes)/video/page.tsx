"use client";
import BotAvatar from "@/components/BotAvatar";
import Empty from "@/components/Empty";
import Heading from "@/components/Heading";
import { Loader } from "@/components/Loader";
import UserAvatar from "@/components/UserAvatar";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { FileAudio, Music, VideoIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { formSchema, formSchemaType } from "./constants";
import { useProModal } from "@/hooks/use-pro-modal";
import { toast } from "@/components/ui/use-toast";
type Props = {};

const VideoGeneration = ({}: Props) => {
  const { isOpen, onClose, onOpen } = useProModal();
    const router = useRouter();
    const [video, setVideo] = useState<string>();

  const form = useForm<formSchemaType>({
    defaultValues: {
      prompt: "",
    },
    resolver: zodResolver(formSchema),
  });
  const isLoading = form.formState.isSubmitting;
  const onSubmit = async (values: formSchemaType) => {
try {
  setVideo(undefined)
    const response = await axios.post('/api/video',values );
    
    setVideo(response.data[0])
    form.reset();
} catch (error:any) {
  if (error?.response?.status === 403) {
    onOpen();
  }else{
    toast({
      title: "error",
      description: "Something went wrong",
    });
  }
    
}finally{
router.refresh();
}

  };

  return (
    <div>
      <Heading
        title="Video Generation "
        description="Turn your prompt into Video."
        icon={VideoIcon}
        iconColor="text-orange-700"
        bgColor="bg-orange-700/10"
      />
      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="
                rounded-lg 
                border 
                w-full 
                p-4 
                px-3 
                md:px-6 
                focus-within:shadow-sm
                grid
                grid-cols-12
                gap-2
              "
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="Clown fish swimming in a coral reef"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                className="col-span-12 lg:col-span-2 w-full"
                type="submit"
                disabled={ !form.watch("prompt").length || isLoading }
                size="icon"
              >
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4">
        <div className="flex flex-col gap-y-4">
        {isLoading && (
            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
              <Loader />
            </div>
          )}
            {!video && !isLoading && (
            <Empty label="No video Generated." />
          )}
          {video && (
          <video controls className="w-full aspect-video mt-8 rounded-lg border bg-black">
          <source src={video} />
        </video>
        )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoGeneration;
