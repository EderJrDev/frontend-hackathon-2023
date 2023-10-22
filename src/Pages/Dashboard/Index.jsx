import { Lightning } from "@phosphor-icons/react";
import ApexChart from "./Graph";
import secureLocalStorage from "react-secure-storage";
import { api } from "../../utils/api";
import { useEffect, useState } from "react";

const Index = () => {
  function Card1({ heading, description, icon, className }) {
    return (
      <div className={`flex gap-4 rounded-xl shadow-sm p-6 ${className}`}>
        <div className="min-w-max">{icon}</div>
        <div className="space-y-2">
          <h3 className="text-[22px] font-semibold">{heading}</h3>
          <p className="leading-8 text-gray-500 font-normal">{description}</p>
        </div>
      </div>
    );
  }

  const [cardInfos, setCardInfos] = useState({});

  const getData = async () => {
    try {
      const token = secureLocalStorage.getItem("token");
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const response = await api.get(
        "energia/2bdf123f-f7d1-4e46-be18-b5247e6f0da0"
      );

      // console.log(response.data);

      const ultimoObjeto = response.data[response.data.length - 1];

      // console.log(ultimoObjeto);
      setCardInfos(ultimoObjeto);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2 p-3 sm:p-8">
        <Card1
          className="bg-[#fcf4ff]"
          heading="Watts por Mês"
          description={`O consumo de watts por mês foi de ${cardInfos.watts_mes}`}
          icon={<Lightning size="2.5rem" className="text-[#D566FF]" />}
        />
        <Card1
          className="bg-[#fefaf0]"
          heading="Watts por Dia"
          description={`O consumo de watts por dia foi de ${cardInfos.watts_dia}`}
          icon={<Lightning size="2.5rem" className="text-[#DDA10C]" />}
        />
        <Card1
          className="bg-[#fff4f4]"
          heading="Nível de Consumo"
          description={`O nível de consumo está ${cardInfos.nivel}.`}
          icon={<Lightning size="2.5rem" className="text-[#FF6080]" />}
        />
        <Card1
          className="bg-[#f3faff]"
          heading="Tipo de Energia"
          description={`Atualmente seu tipo de energia é ${cardInfos.fonte_de_energia}.`}
          icon={<Lightning size="2.5rem" className="text-[#269FFF]" />}
        />
      </div>

      <div>
        <ApexChart />
      </div>
      {/* <div className="flex space-x-4">
     

        <div className="max-w-[18rem] rounded-lg  bg-green-600 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
          <div className="border-b-2 border-[#0000002d] px-6 py-3 text-white dark:text-neutral-50">
            Header
          </div>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight text-white dark:text-neutral-50">
              Primary card title
            </h5>
            <p className="text-base text-white dark:text-neutral-50">
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </p>
          </div>
        </div>

        <div className="max-w-[18rem] rounded-lg bg-green-500 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
          <div className="border-b-2 border-[#0000002d] px-6 py-3 text-white dark:text-neutral-50">
            Header
          </div>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight text-white dark:text-neutral-50">
              Primary card title
            </h5>
            <p className="text-base text-white dark:text-neutral-50">
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </p>
          </div>
        </div>

        <div className="max-w-[18rem] rounded-lg bg-green-400 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
          <div className="border-b-2 border-[#0000002d] px-6 py-3 text-white dark:text-neutral-50">
            Header
          </div>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight text-white dark:text-neutral-50">
              Primary card title
            </h5>
            <p className="text-base text-white dark:text-neutral-50">
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </p>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Index;
