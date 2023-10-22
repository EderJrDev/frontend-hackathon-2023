import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Typed from "react-typed";
import "./index.css";
// import Single from '../assets/single.png'
// import Double from '../assets/double.png'
// import Triple from '../assets/triple.png'
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
import Modal from "../../components/Modal";
import { useForm } from "react-hook-form";
import secureLocalStorage from "react-secure-storage";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [nav, setNav] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    // setIsRegistered(true);
    try {
      secureLocalStorage.setItem("ClientsInfo", data);

      navigate("/simulator");
    } catch (e) {
      console.log(e);
      // notify();
      // reset();
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 className="text-2xl font-bold mb-4">Conheça nosso Simulador</h2>
        <div className="w-full flex flex-col mb-2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="text-start">
              <input
                type="text"
                {...register("name", { required: true })}
                autoFocus
                placeholder="Nome"
                className="w-full text-black py-4 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
              />
              {errors.email && (
                <span className="text-red-500">Nome Obrigatório.</span>
              )}
            </div>
            <div className="text-start">
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Email"
                className="w-full text-black py-4 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
              />
              {errors.email && (
                <span className="text-red-500">Senha Obrigatória.</span>
              )}
            </div>
            <button
              // onClick={() => setIsOpen(false)}
              className="bg-[#00df9a] w-[200px] rounded-md font-medium mt-6 mx-auto px-6 py-3"
            >
              Simular
            </button>
          </form>
        </div>
        {/* <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setIsOpen(false)}
        >
          Abrir Modal
        </button> */}
      </Modal>
      {/* </div> */}

      {/* end modal  */}
      {/* // NAVBAR */}
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
        <ul className="hidden md:flex">
          <li className="p-4">Home</li>
          <li className="p-4">Serviços</li>
          {/* <li className="p-4">About</li> */}
          <li className="p-4">Contato</li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
              : "ease-in-out duration-500 fixed left-[-100%]"
          }
        >
          <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
            EcoManager
          </h1>
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Resources</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
      {/* // END NAVBAR */}

      {/* // HERO */}
      <div className="text-white">
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold p-2">
            SUA EMPRESA É SUSTENTÁVEL ?
          </p>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
            EcoManager
          </h1>
          <div className="flex justify-center items-center">
            <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
              Torne sua empresa
            </p>
            <Typed
              className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-[#00df9a]"
              strings={["sustentável", "ecológica", "saudável"]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </div>
          <p className="md:text-2xl text-xl font-bold text-gray-500">
            Um sistema completo para a saúde ambiental da sua companhia!
          </p>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
            Saiba mais
          </button>
        </div>
      </div>
      {/* // END HERO */}

      {/* // Analytics */}

      <div className="w-full bg-white py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img
            className="w-[500px] mx-auto my-4"
            //  src={Laptop}
            alt="/"
          />
          <div className="flex flex-col justify-center">
            <p className="text-[#00df9a] font-bold ">Dashboard Analítico</p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Saiba como está o consumo em sua empresa
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum molestiae delectus culpa hic assumenda, voluptate
              reprehenderit dolore autem cum ullam sed odit perspiciatis.
              Doloribus quos velit, eveniet ex deserunt fuga?
            </p>
            <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
              Começar
            </button>
          </div>
        </div>
      </div>

      {/* // END  Analytics */}

      {/* CARDS  */}

      <div className="w-full py-[10rem] px-4 bg-white">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img
              className="w-20 mx-auto mt-[-3rem] bg-white"
              // src={Single}
              alt="/"
            />
            <h2 className="text-2xl font-bold text-center py-8">Feedbacks</h2>
            <p className="text-center text-4xl font-bold">PREMIUM</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">Informações</p>
              <p className="py-2 border-b mx-8">Reputação</p>
              <p className="py-2 border-b mx-8">Transparência</p>
            </div>
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
              Saiba Mais
            </button>
          </div>
          <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
            <img
              className="w-20 mx-auto mt-[-3rem] bg-transparent"
              // src={Double}
              alt="/"
            />
            <h2 className="text-2xl font-bold text-center py-8">Simulador</h2>
            <p className="text-center text-4xl font-bold">Grátis</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">Informações da Empresa</p>
              <p className="py-2 border-b mx-8">Gráficos detalhados</p>
              <p className="py-2 border-b mx-8">Estatísticas</p>
            </div>
            <button
              onClick={() => setIsOpen(true)}
              className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3"
            >
              Faça agora
            </button>
          </div>
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img
              className="w-20 mx-auto mt-[-3rem] bg-white"
              // src={Triple}
              alt="/"
            />
            <h2 className="text-2xl font-bold text-center py-8">
              Relatório de Gastos
            </h2>
            <p className="text-center text-4xl font-bold">PREMIUM</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">Informações Completas</p>
              <p className="py-2 border-b mx-8">Planejamento</p>
              <p className="py-2 border-b mx-8">Crescimento Sustentável</p>
            </div>
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
              Saiba Mais
            </button>
          </div>
        </div>
      </div>

      {/* END CARDS  */}

      {/* FOOTEr  */}

      <div className="max-w-[1240px] mx-auto text-white py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
        <div>
          <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
          <p className="py-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
            ullam iste repellat consequatur libero reiciendis, blanditiis
            accusantium.
          </p>
          <div className="flex justify-between md:w-[75%] my-6">
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-6">
          <div>
            <h6 className="font-medium text-gray-400">Solutions</h6>
            <ul>
              <li className="py-2 text-sm">Analytics</li>
              <li className="py-2 text-sm">Marketing</li>
              <li className="py-2 text-sm">Commerce</li>
              <li className="py-2 text-sm">Insights</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400">Support</h6>
            <ul>
              <li className="py-2 text-sm">Pricing</li>
              <li className="py-2 text-sm">Documentation</li>
              <li className="py-2 text-sm">Guides</li>
              <li className="py-2 text-sm">API Status</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400">Company</h6>
            <ul>
              <li className="py-2 text-sm">About</li>
              <li className="py-2 text-sm">Blog</li>
              <li className="py-2 text-sm">Jobs</li>
              <li className="py-2 text-sm">Press</li>
              <li className="py-2 text-sm">Careers</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400">Legal</h6>
            <ul>
              <li className="py-2 text-sm">Claim</li>
              <li className="py-2 text-sm">Policy</li>
              <li className="py-2 text-sm">Terms</li>
            </ul>
          </div>
        </div>
      </div>

      {/* END FOOTER  */}
    </>
  );
};

export default LandingPage;
