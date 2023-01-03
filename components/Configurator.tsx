import React, { useEffect } from "react";
import { SubmitHandler, useForm, useFormContext } from "react-hook-form";
import { Notification } from "types/notification";
import FormControl from "./FormControl";
import Input from "./Input";
import Label from "./Label";

function Configurator() {
  const { register } = useFormContext<Notification>();

  return <div className="space-y-6">
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
      <Label htmlFor="description">Description</Label>
      <Input id="description" placeholder="eg: email: john@doe.com" {...register("description", { 
        required: true
      })} />
    </FormControl>
  </div>
}

export default Configurator;