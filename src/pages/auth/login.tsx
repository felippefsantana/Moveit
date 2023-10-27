import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";

import banner from "@/public/images/banner-2-green.svg";
import Link from "next/link";

const Login = () => {
  return (
    <main className="flex min-h-screen">
      <div className="flex-1 flex justify-center items-center bg-gradient-to-t from-indigo-500 from-10% via-sky-500 via-30% to-teal-500 to-90%">
        <Image src={banner} alt="Banner"></Image>
      </div>
      <aside className="w-1/3 flex flex-col items-center justify-center p-5">
        <div className="w-full max-w-sm">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 mb-5">Move.it</h1>
          </div>
          <form className="mb-3" onSubmit={(e) => e.preventDefault()}>
            <div className="mb-4 w-full">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                E-mail
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="Digite seu e-mail"
              />
            </div>
            <div className="mb-4 w-full">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                Senha
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
              />
            </div>
            <button className="bg-indigo-500 hover:bg-indigo-400 w-full rounded-md text-white p-3" type="submit">
              Entrar
            </button>
          </form>

          <div className="flex justify-between">
            <Link href="#" className="hover:underline">Esqueceu a senha?</Link>
            <Link href="#" className="text-indigo-500 hover:underline"> Cadastrar-se</Link>
          </div>

          <div className="flex w-full items-center my-5">
            <Separator className="bg-gray-300 w-full h-px" orientation="horizontal"></Separator>
            <span className="mx-3">ou</span>
            <Separator className="bg-gray-300 w-full h-px" orientation="horizontal"></Separator>
          </div>
          
          <button className="bg-red-500 hover:bg-red-400 w-full rounded-md text-white p-3" type="submit">
            Entrar com Google
          </button>
        </div>
      </aside>
    </main>
  );
};

export default Login;