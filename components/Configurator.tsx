import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import FormControl from "./FormControl";
import Input from "./Input";
import Label from "./Label";

type Inputs = {
  event: string,
  channel: string,
  project: string,
  description: string,
}

interface IConfiguratorProps {
  onChange?: (inputs: Partial<Inputs>) => void,
  onSubmit?: SubmitHandler<Inputs>
}

function Configurator({ onChange, onSubmit = () => {} }: IConfiguratorProps) {
  const { register, handleSubmit, watch } = useForm<Inputs>();

  useEffect(() => {
    if (!onChange) {
      return; 
    }

    const subscription = watch(values => onChange(values));
    return () => subscription.unsubscribe();
  }, [watch]);

  return <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
    <FormControl>
      <Label htmlFor="event">Event</Label>
      <Input id="event" placeholder="User registered" {...register("event", { 
        required: true
      })} />
    </FormControl>

    <FormControl>
      <Label htmlFor="channel">Channel</Label>
      <Input id="channel" placeholder="sign-up" {...register("channel", { 
        required: true
      })} />
    </FormControl>

    <FormControl>
      <Label htmlFor="project">Project</Label>
      <Input id="project" placeholder="my-cool-project" {...register("project", { 
        required: true
      })} />
    </FormControl>
  </form>
}

export default Configurator;