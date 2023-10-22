import toast from "react-hot-toast";
import { api } from "../../utils/api";
import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/AuthContext";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const notify = () =>
    toast.error(
      "Dados inválidos por favor verifique suas informações e tente novamente."
    );

  const { setIsRegistered } = useAuth();
  // console.log("isRegistered:", isRegistered);
  const onSubmit = async (data) => {
    setIsRegistered(true);
    try {
      // console.log(data);
      await api.post("user/", data);
      // console.log(response);
      toast.success("Conta criada com sucesso!");
      // navigate("/dashboard");
      setIsRegistered(false);
    } catch (e) {
      // console.log(e);
      notify();
      reset();
    }
  };

  return (
    <div>
      <div className="w-full flex flex-col mb-2">
        <h3 className="text-3xl font-semibold mb-2">Cadastro</h3>
        <p className="text-base mb-2">
          Bem vindo! Por favor Preencha todos os campos para cadastro.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full flex flex-col mb-2">
          <input
            type="text"
            autoFocus
            {...register("name", { required: true })}
            placeholder="Nome"
            className="w-full text-black py-4 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
          />
          {errors.name && (
            <span className="text-red-500">Nome Obrigatório.</span>
          )}
          <input
            type="email"
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
          <p
            onClick={() => setIsRegistered(true)}
            className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2"
          >
            Realizar Login
          </p>
        </div>

        <div className="w-full flex flex-col my-4">
          <button
            type="submit"
            className="w-full text-white mt-2 font-semibold bg-[#060606] rounded-md p-4 text-center justify-center"
          >
            Criar Conta
          </button>

          <button
            onClick={() => setIsRegistered(true)}
            className="w-full text-[#060606] font-semibold bg-white border-2 mt-3 border-black rounded-md p-4 text-center justify-center"
          >
            Voltar para o Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
