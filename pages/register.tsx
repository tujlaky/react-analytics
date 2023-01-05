import Button from "@/components/Button";
import FormControl from "@/components/FormControl";
import Input from "@/components/Input";
import Label from "@/components/Label";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from "next/router";
import { AuthAction, withAuthUser } from "next-firebase-auth";

interface LoginData {
  username: string;
  password: string;
};

function Register() {
  const { handleSubmit, register } = useForm<LoginData>();
  const router = useRouter();

  const onSubmit = async ({ username, password }: LoginData) => {
    const auth = getAuth();

    await createUserWithEmailAndPassword(auth, username, password);

    router.push('/');
  };

  return <div className="flex flex-col flex-1 justify-center items-center">
    <div className="flex flex-col justify-center align-center rounded max-w-lg w-2/3 p-6 border">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-6">
        <FormControl>
          <Label htmlFor="username">Email</Label>
          <Input type="email" id="username" placeholder="Email" {...register("username", { 
            required: true
          })} />
        </FormControl>

        <FormControl>
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" placeholder="Password" {...register("password", { 
            required: true
          })} />
        </FormControl>

        <div className="flex flex-col items-center justify-center space-y-2">
          <Button color="primary" type="submit">Register</Button>
          <Link className="text-center underline dark:text-white" href="/login">Sign up</Link>

        </div>
      </form>
    </div>
  </div>;
}

export default withAuthUser({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
  whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
  whenUnauthedAfterInit: AuthAction.RENDER
})(Register)