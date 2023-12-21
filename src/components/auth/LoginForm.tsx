import { FC, FormEvent, useRef } from "react";
import { PrimaryButton, RouterLink, TextInput, TextLabel } from "..";

interface LoginFormProps {}

const LoginForm: FC<LoginFormProps> = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    console.log(email, password);
  };

  return (
    <form onSubmit={handleLogin} className="space-y-6">
      <div>
        <TextLabel value="Email Address" htmlFor="email" />
        <div className="mt-2">
          <TextInput
            ref={emailRef}
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div>
        <TextLabel value="Password" htmlFor="password" />
        <div className="mt-2">
          <TextInput
            ref={passwordRef}
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            placeholder="******"
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm leading-6">
          <RouterLink to="/forgot-password">
            Forgot password?
          </RouterLink>
        </div>
      </div>

      <div>
        <PrimaryButton type="submit" text={"Sign in"} />
      </div>
    </form>
  );
};

export default LoginForm;
