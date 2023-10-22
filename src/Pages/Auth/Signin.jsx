import { useState } from "react";
import { Toaster } from "react-hot-toast";
//imports
import Login from "./Login";
import Register from "./Register";
import bgLogin from "../../assets/1.png";
import { useAuth } from "../../hooks/AuthContext";

const Signin = () => {
  const { isRegistered, setIsRegistered } = useAuth();
  const [showRegister, setShowRegister] = useState(false);
  // console.log("isRegistered:", isRegistered);
  const register = () => {
    setShowRegister(true);
    setIsRegistered(false);
  };

  return (
    <>
      {/* notification  */}
      <Toaster position="top-right" reverseOrder={false} />
      {/* notification  */}

      <div className="w-full h-screen flex items-start">
        <div className="relative w-1/2 h-full flex flex-col">
          {/* <div className="absolute top-[10%] left-[10%]  bg-gray-3 rounded-b p-4 text-center justify-center bg-opacity-50 flex flex-col">
          <h1 className="text-4xl text-[#060606] font-bold my-4">
            Turn your ideias into reality
          </h1>
          <p className="text-xl text-[#060606] font-normal">
            Start for free and get exciting
          </p>
        </div> */}
          <img src={bgLogin} alt="image-system" className="w-full h-full object-cover" />
        </div>

        <div className="w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 justify-between">
          <h1 className="text-xl text-[#060606] font-semibold">EcoManager</h1>

          <div className="w-full flex flex-col max-w-[550px]:">
            {/* {showRegister ? <Register /> : <Login />} */}

            {isRegistered ? <Login /> : <Register />}

            {/* {!showRegister && (
              <button
                onClick={register}
                className="w-full text-[#060606] font-semibold bg-white border-2 border-black rounded-md p-4 text-center justify-center"
              >
                Cadastrar
              </button>
            )} */}
          </div>

          <div className="w-full flex items-center justify-center">
            <p className="text-sm font-normal text-[#060606]">
              Desenvolvido por{" "}
              <span className="font-semibold underline underline-offset-2 cursor-pointer">
                EcoManager
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
