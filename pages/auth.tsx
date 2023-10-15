import Input from "@/components/input";
import { useCallback, useState } from "react";
const Auth = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setpassword] = useState("");

  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currVariant) => {
      return currVariant === "login" ? "register" : "login";
    });
  }, []);

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full md:bg-opacity-50">
        <nav className="px-8 py-8">
          <img src="/images/logo.png" alt="" className="h-12" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black w-full px-14 py-11 bg-opacity-70 self-center mt-3 md:max-w-md w-full rounded-xl lg:w-2/5 lg:max-w-md ">
            <h2 className="text-white text-semibold text-3xl mb-3">
              {variant === "login" ? "Sign in" : "Register"}
            </h2>
            <div className="w-full mt-7">
              {variant === "register" && (
                <Input
                  label="Username"
                  onChange={(ev) => {
                    setName(ev.target.value);
                  }}
                  id="name"
                  type="text"
                  value={name}
                />
              )}
              <Input
                label="Eamil"
                onChange={(ev) => {
                  setEmail(ev.target.value);
                }}
                id="email"
                type="email"
                value={email}
              />
              <Input
                label="Password"
                onChange={(ev) => {
                  setpassword(ev.target.value);
                }}
                id="pass"
                type="password"
                value={password}
              />
            </div>
            <button className="bg-red-600 text-white w-full rounded-lg mt-7 py-2 hover:bg-red-700 transition hover:text-gray-400">
            {variant === "login" ? "Log in" : "Sign up"}
            </button>
            <p className="text-neutral-500  mt-10 ">
                {variant === 'register' && (
                  'First time using WatchFlix?'
                )}
                {variant === 'login' && (
                  'Already have an account'
                )}
              <span
                onClick={toggleVariant}
                className="hover:underline ml-1 text-white cursor-pointer"
              >
                {variant === 'register' && (
                  'Login'
                )}
                {variant === 'login' && (
                  'Create an account'
                )}
                
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
