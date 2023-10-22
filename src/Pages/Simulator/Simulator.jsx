import { useForm } from "react-hook-form";
import { api } from "../../utils/api";
import { useState } from "react";
// import toast, { Toaster } from "react-hot-toast";
// import Modal from "../../components/Modal";
// import secureLocalStorage from "react-secure-storage";
import { Lightbulb, PaperPlaneTilt, SealCheck, X } from "@phosphor-icons/react";
import { Warning } from "postcss";

import cardOne from "../../assets/bg-1.jpg";
import cardTwo from "../../assets/card-2.jpg";
import cardThree from "../../assets/card-3.jpg";
import cardFour from "../../assets/card-3.png";
import cardFive from "../../assets/card-4.jpg";
import cardLight from "../../assets/bg-2.jpg";
// import Spinner from "../../components/Spinner";

const Simulator = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // const notify = () => toast.error("Você já possui cadastro!");

  // toast.success(
  //   "Dados inválidos por favor verifique suas informações e tente novamente."
  // );

  const [selecao, setSelecao] = useState("");
  const [response, setResponse] = useState("");
  const [showForm, setShowForm] = useState(true);

  const [filter, setfilter] = useState(null);

  const onSubmit = async (data) => {
    try {
      console.log(data);

      setfilter(data);

      setSelecao(data.nivel);

      // const response = await api.post("energia/calculate", data);
      // console.log(response);

      const response = await api.post("energia/calculate", data);
      console.log(response);
      setResponse(response.data);
      setShowForm(false);
      reset();
      // notify();
      // setSelecao(true);
    } catch (e) {
      // console.log(e);
      // notify();
      // setShowForm(false);

      reset();
    }
  };

  // const onSubmitPassword = async (data) => {
  //   try {
  //     setIsLoading(true);
  //     console.log(filter);
  //     const response = await api.post("energia/calculate", filter);
  //     console.log(response);
  //     setResponse(response.data);

  //     // toast(
  //     //   response.data,
  //     //   {
  //     //     duration: 6000,
  //     //   }
  //     // );
  //     // const token = response.data.token;
  //     // secureLocalStorage.setItem("token", token);
  //     // setSelecao(selecao);
  //     // navigate("/dashboard");
  //     setSelecao(filter.nivel);
  //     setIsLoading(false);
  //     setShowForm(false);
  //     setIsOpen(false);
  //     resetPassword();
  //   } catch (e) {
  //     console.log(e);
  //     notify();
  //     setIsOpen(false);
  //     resetPassword();
  //   }
  // };

  const solucoesEnergia = {
    simples: {
      solution1: {
        img: cardOne,
        titulo: "Sensibilização Funcionários",
        descricao:
          "Promova conscientização sobre o uso eficiente de energia entre os funcionários por meio de campanhas e emails informativos.",
      },
      solution2: {
        img: cardLight,
        titulo: "Lampadas LED",
        descricao:
          "Substitua lâmpadas tradicionais por LED, que consomem menos energia.",
      },
      solution3: {
        img: cardTwo,
        titulo: "Manutenção de Equipamentos",
        descricao:
          "Implemente um plano de manutenção preventiva para garantir que os equipamentos estejam funcionando eficientemente.",
      },
    },
    avancado: {
      solution1: {
        img: cardThree,
        descricao:
          "Combine energia solar com sistemas de armazenamento de energia, como baterias, para aproveitar a energia durante períodos de baixa produção solar. Considere também outras fontes de energia renovável, como turbinas eólicas ou energia geotérmica",
      },
      solution2: {
        img: cardFour,
        titulo: "Certificações",
        descricao:
          "Utilize softwares avançados de gestão de energia que ofereçam insights detalhados, previsões de consumo e sugestões automatizadas para otimização. Integre sistemas de IoT para controle remoto e automação.",
      },
      solution3: {
        img: cardFive,
        titulo: "Eficiência Energética",
        descricao:
          "Trabalhe para obter certificações de eficiência energética, como LEED (Liderança em Energia e Design Ambiental) ou ISO 50001, que não apenas ajudam a economizar, mas também melhoram a reputação da empresa.",
      },
    },
  };

  let borderColorClass = "";
  let icon = 0;
  if (response.includes("abaixo")) {
    // Se for "abaixo", define a classe da borda como vermelha
    borderColorClass = "border-[#00df9a]";
    icon = 3;
  } else if (response.includes("na média")) {
    // Se for "na média", define a classe da borda como amarela
    borderColorClass = "border-yellow-500";
    icon = 2;
  } else if (response.includes("mais alto")) {
    // Se for "acima da média", define a classe da borda como verde
    borderColorClass = "border-red-500";
    icon = 1;
  }

  const numeroWhatsapp = "16997328376";

  const linkWhatsapp = `https://wa.me/55${numeroWhatsapp}`;

  return (
    <>
      {/* notification  */}
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
      {/* notification  */}
      <div>
        <h1 className="pb-5 text-xl">
          {showForm ? (
            "Bem vindo ao Simulador, preencha os dados abaixo e saiba mais informações da a sua empresa sustentável"
          ) : (
            <>
              Essas são algumas formas de tornar sua companhia sustentável, para
              saber como aplicá-las em sua empresa entre em contato com um
              consultor.{" "}
              <a
                className="font-bold flex text-[#00df9a]"
                href={linkWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                Enviar mensagem no WhatsApp{" "}
                <PaperPlaneTilt className="mx-2" size={32} color="#00df9a" />
              </a>
            </>
          )}
        </h1>
      </div>
      {showForm && (
        <>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col md:flex-row mb-6 mx-2 md:mx-0">
              <div className="w-full px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  Preço da Energia
                </label>
                <input
                  type="number"
                  placeholder="R$"
                  {...register("valor", { required: true })}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                />
                {errors.valor && (
                  <span className="text-red-500 text-xs italic">
                    Valor Obrigatório.
                  </span>
                )}
              </div>
              <div className="w-full px-3 mb-4 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Nº de Funcionários
                </label>
                <input
                  type="number"
                  placeholder="0"
                  {...register("funcionarios", { required: true })}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                />
                {errors.funcionarios && (
                  <span className="text-red-500 text-xs italic">
                    Quantidade de Funcionários Obrigatória.
                  </span>
                )}
              </div>
              <div className="w-full px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-state"
                >
                  Estado
                </label>
                <div className="relative">
                  <select
                    {...register("estado", { required: true })}
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  >
                    <option>Selecione</option>
                    <option>SP</option>
                    <option>RJ</option>
                    <option>MG</option>
                  </select>

                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
                {errors.estado && (
                  <span className="text-red-500 text-xs italic">
                    Email Obrigatório.
                  </span>
                )}
              </div>
              <div className="w-full px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-zip"
                >
                  Nível da solução
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    {...register("nivel", { required: true })}
                  >
                    <option value="Todos">Todos</option>
                    <option value="Simples">Simples</option>
                    <option value="Completo">Completo</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  // onClick={() => setIsOpen(true)}
                  className="bg-[#00df9a] w-[200px] rounded-md font-medium mt-6 mx-auto px-6 py-3"
                >
                  Simular
                </button>
              </div>
            </div>
          </form>
        </>
      )}

      {selecao && (
        <>
          <div className="pt-5">
            <div
              // key={index}
              href="#"
              className={`flex flex-col items-center bg-white border ${borderColorClass} rounded-lg shadow md:flex-row md:max-w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700`}
            >
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl flex font-bold tracking-tight text-gray-900 dark:text-black">
                  {/* {item.titulo} */} Análise da Simulação{" "}
                  {icon === 3 && <SealCheck className="mx-2" size={32} />}
                  {icon === 2 && <Warning className="mx-2" size={32} />}
                  {icon === 1 && <X className="mx-2" size={32} />}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {response}
                </p>
              </div>
            </div>
          </div>
        </>
      )}

      {selecao === "Simples" && (
        <>
          {Object.values(solucoesEnergia.simples).map((item, index) => (
            <>
              <div className="pt-5 m-0">
                <div
                  key={index}
                  href="#"
                  className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <img
                    className="object-cover w-full h-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                    src={item.img}
                    alt="image-system"
                  />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                      {item.titulo}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {item.descricao}
                    </p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </>
      )}

      {selecao === "Completo" && (
        <>
          {Object.values(solucoesEnergia.avancado).map((item, index) => (
            <>
              <div className="pt-5">
                <div
                  key={index}
                  href="#"
                  className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <img
                    className="object-cover w-full h-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                    src={item.img}
                    alt="image-system"
                  />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                      {item.titulo}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {item.descricao}
                    </p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </>
      )}

      {selecao === "Todos" && (
        <>
          {Object.values(solucoesEnergia).map((categoria, indexCategoria) =>
            Object.values(categoria).map((item, indexItem) => (
              <div key={`${indexCategoria}-${indexItem}`} className="pt-5">
                <div
                  key={indexItem}
                  href="#"
                  className="flex flex-col items-center bg-white rounded-lg shadow md:flex-row md:max-w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <img
                    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg p-0 m-0"
                    src={item.img}
                    alt="image-system"
                  />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                      {item.titulo}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {item.descricao}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </>
      )}
    </>
  );
};

export default Simulator;
