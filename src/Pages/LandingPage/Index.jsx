import { useEffect, useState } from "react";
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

import dashboard from "../../assets/system.png";
import { CurrencyDollar, GearSix, Note } from "@phosphor-icons/react";

const LandingPage = () => {
  const [nav, setNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [scrollTo, setScrollTo] = useState(null);

  const scrollToSection = (id) => {
    setScrollTo(id);
  };

  // Efeito para rolar suavemente ao alterar o estado do scrollTo
  useEffect(() => {
    if (scrollTo) {
      const element = document.getElementById(scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        // Limpar o estado após rolar suavemente
        setScrollTo(null);
      }
    }
  }, [scrollTo]);

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

  const numeroWhatsapp = "16997328376";

  const linkWhatsapp = `https://wa.me/55${numeroWhatsapp}`;

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
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium mt-6 mx-auto px-6 py-3">
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
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">
          EcoManager.
        </h1>
        <ul className="hidden md:flex">
          <li className="p-4">
            {" "}
            <a
              className="cursor-pointer"
              onClick={() => scrollToSection("home")}
            >
              Home
            </a>{" "}
          </li>
          <li className="p-4">
            <a
              className="cursor-pointer"
              onClick={() => scrollToSection("services")}
            >
              Serviços
            </a>{" "}
          </li>
          <li className="p-4">
            <a
              className="cursor-pointer"
              onClick={() => scrollToSection("contacts")}
            >
              Contato
            </a>{" "}
          </li>
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
          <a
            href={linkWhatsapp}
            target="_blank"
            className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black"
            rel="noreferrer"
          >
            Saiba mais
          </a>
        </div>
      </div>
      {/* // END HERO */}

      {/* // Analytics */}
      <div id="home" className="w-full section bg-white py-16 px-4">
        <div className="max-w-[1900px] mx-auto md:flex md:items-center">
          <div className="md:w-2/3 mx-auto md:mx-0 px-3">
            <p className="text-[#00df9a] font-bold">Dashboard Analítico</p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Saiba como está o consumo em sua empresa
            </h1>
            <p className="text-base">
              A sustentabilidade empresarial é um conceito fundamental no
              cenário atual de negócios, destacando-se como uma abordagem
              estratégica para as organizações. No contexto da responsabilidade
              social corporativa, a sustentabilidade implica em operar de
              maneira economicamente viável, socialmente justa e ecologicamente
              correta. Empresas sustentáveis consideram não apenas os lucros,
              mas também o impacto de suas atividades no meio ambiente e na
              sociedade.
            </p>
            <button className="bg-black justify-center text-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3">
              <a target="_blank" href={linkWhatsapp} rel="noreferrer">
                Começar
              </a>
            </button>
          </div>
          <img
            className="w-full md:w-2/3 mx-auto md:mx-0 my-4 mt-6 ml-5 md:order-last"
            src={dashboard}
            alt="/"
          />
        </div>
      </div>
      {/* // END  Analytics */}

      {/* CARDS  */}
      <div id="services" className="w-full section py-[10rem] px-4 bg-white">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <h2 className="text-2xl flex m-auto p-0 font-bold text-center">
              Feedbacks <Note size={32} className="mx-2" color="#00df9a" />
            </h2>
            <p className="text-center text-4xl font-bold">PREMIUM</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">Informações</p>
              <p className="py-2 border-b mx-8">Reputação</p>
              <p className="py-2 border-b mx-8">Transparência</p>
            </div>
            <a
              href={linkWhatsapp}
              target="_blank"
              className="bg-[#00df9a] w-[200px] text-center rounded-md font-medium my-6 mx-auto px-6 py-3"
              rel="noreferrer"
            >
              Saiba Mais
            </a>
          </div>
          <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
            <h2 className="text-2xl flex m-auto p-0 font-bold text-center">
              Simulador <GearSix size={32} className="mx-2" color="#00df9a" />
            </h2>
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
            <h2 className="text-2xl flex m-auto p-0 font-bold text-center">
              Relatório de Gastos{" "}
              <CurrencyDollar size={32} className="mx-2" color="#00df9a" />
            </h2>
            <p className="text-center text-4xl font-bold">PREMIUM</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">Informações Completas</p>
              <p className="py-2 border-b mx-8">Planejamento</p>
              <p className="py-2 border-b mx-8">Crescimento Sustentável</p>
            </div>
            <a
              href={linkWhatsapp}
              target="_blank"
              className="bg-[#00df9a] w-[200px] text-center rounded-md font-medium my-6 mx-auto px-6 py-3"
              rel="noreferrer"
            >
              Saiba Mais
            </a>
          </div>
        </div>
      </div>
      {/* END CARDS  */}

      {/* FOOTEr  */}
      <div
        id="contacts"
        className="max-w-[1240px] mx-auto section text-white py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300"
      >
        <div>
          <h1 className="w-full text-3xl font-bold text-[#00df9a]">
            EcoManager.
          </h1>
          <p className="py-4">Nos contacte nos outros meios de comunicação</p>
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
            <h6 className="font-medium text-gray-400">Soluções</h6>
            <ul>
              <li className="py-2 text-sm">Análises</li>
              <li className="py-2 text-sm">Marketing</li>
              <li className="py-2 text-sm">Benefícios</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400">Suporte</h6>
            <ul>
              <li className="py-2 text-sm">Valores</li>
              <li className="py-2 text-sm">Guias</li>
              <li className="py-2 text-sm">Feedback</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400">Companhia</h6>
            <ul>
              <li className="py-2 text-sm">Sobre</li>
              <li className="py-2 text-sm">Vagas</li>
              <li className="py-2 text-sm">Serviços</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400">Parceiros</h6>
            <ul>
              <li className="py-2 text-sm">Uni-Facef</li>
              <li className="py-2 text-sm">Unifacef Junior</li>
              <li className="py-2 text-sm">Batucacef</li>
            </ul>
          </div>
        </div>
      </div>
      {/* END FOOTER  */}
    </>
  );
};

export default LandingPage;
