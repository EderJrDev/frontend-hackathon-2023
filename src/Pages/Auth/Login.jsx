import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
import secureLocalStorage from "react-secure-storage";

import { api } from "../../utils/api";
import { useAuth } from "../../hooks/AuthContext";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const notify = () =>
    toast.error(
      "Dados inválidos por favor verifique suas informações e tente novamente."
    );

  const onSubmit = async (data) => {
    try {
      // console.log(data);
      const response = await api.post("user/auth", data);
      // console.log(response);
      const token = response.data.token;
      secureLocalStorage.setItem("token", token);

      navigate("/dashboard");
    } catch (e) {
      // console.log(e);
      notify();
      reset();
    }
  };

  const { setIsRegistered } = useAuth();

  return (
    <div>
      <div className="w-full flex flex-col mb-2">
        <h3 className="text-3xl font-semibold mb-2">Bem Vindo de Volta! </h3>
        <p className="text-base mb-2">Informe seus dados de login.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full flex flex-col mb-2">
          <input
            type="email"
            autoFocus
            {...register("email", { required: true })}
            placeholder="Email"
            className="w-full text-black py-4 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
          />
          {errors.email && (
            <span className="text-red-500">Email Obrigatório.</span>
          )}

          <input
            type="password"
            {...register("password", { required: true })}
            placeholder="Senha"
            className="w-full text-black py-4 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
          />
          {errors.password && (
            <span className="text-red-500">Senha Obrigatória.</span>
          )}
        </div>

        <div className="w-full flex items-center justify-between">
          <div className="w-full flex items-center">
            <input type="checkbox" className="w-4 h-4 mr-2" />
            <p className="text-sm">Remenber Me </p>
          </div>
          <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2">
            Esqueci a Senha
          </p>
        </div>

        <div className="w-full flex flex-col my-4">
          <button
            type="submit"
            className="w-full text-white mt-2 font-semibold bg-[#060606] rounded-md p-4 text-center justify-center"
          >
            Entrar
          </button>

          <button
            onClick={() => setIsRegistered(false)}
            className="w-full text-[#060606] font-semibold bg-white mt-3 border-2 border-black rounded-md p-4 text-center justify-center"
          >
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
