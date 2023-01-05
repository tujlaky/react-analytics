import Button from "@/components/Button";
import FormControl from "@/components/FormControl";
import Input from "@/components/Input";
import Label from "@/components/Label";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthAction, withAuthUser } from "next-firebase-auth";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

interface LoginData {
  username: string;
  password: string;
};

function Login() {
  const { handleSubmit, register } = useForm<LoginData>();
  const router = useRouter();

  const onSubmit = async ({ username, password }: LoginData) => {
    const auth = getAuth();

    await signInWithEmailAndPassword(auth, username, password);
    router.push('/')
  };

  return <div className="flex flex-col flex-1 justify-center items-center">
    <div className="flex flex-col justify-center align-center rounded w-2/3 max-w-lg p-6 border">
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
          <Button color="primary" type="submit">Login</Button>
          <Link className="text-center dark:text-white underline" href="/register">Register</Link>

        </div>
      </form>
    </div>
  </div>;
}

export default withAuthUser({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
  whenUnauthedBeforeInit: AuthAction.RENDER,
  whenUnauthedAfterInit: AuthAction.RENDER
})(Login);