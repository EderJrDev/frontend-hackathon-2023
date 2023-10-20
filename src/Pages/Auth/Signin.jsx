// import bgLogin from "../../assets/bg-login.jpg";
// import bgLogin from "../../assets/bg-login-green.png";
import bgLogin from "../../assets/bg-green.png";

const Signin = () => {
  return (
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
        <img src={bgLogin} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 justify-between">
        <h1 className="text-xl text-[#060606] font-semibold">
          Interative Brand
        </h1>

        <div className="w-full flex flex-col max-w-[550px]:">
          <div className="w-full flex flex-col mb-2">
            <h3 className="text-3xl font-semibold mb-2">Login</h3>
            <p className="text-base mb-2">
              Welcome Back! Please enter your details.
            </p>
          </div>

          <div className="w-full flex flex-col mb-2">
            <input
              type="email"
              placeholder="Email"
              className="w-full text-black py-4 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full text-black py-4 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
            />
          </div>

          <div className="w-full flex items-center justify-between">
            <div className="w-full flex items-center">
              <input type="checkbox" className="w-4 h-4 mr-2" />
              <p className="text-sm">Remenber Me </p>
            </div>
            <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2">
              Forgot Password
            </p>
          </div>

          <div className="w-full flex flex-col my-4">
            <button className="w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-4 text-center justify-center">
              Login
            </button>
            <button className="w-full text-[#060606] my-2 font-semibold bg-white border-2 border-black rounded-md p-4 text-center justify-center">
              Register
            </button>
          </div>
        </div>

        <div className="w-full flex items-center justify-center">
          <p className="text-sm font-normal text-[#060606]">
            Don't have a account{" "}
            <span className="font-semibold underline underline-offset-2 cursor-pointer">Sign up for free</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
