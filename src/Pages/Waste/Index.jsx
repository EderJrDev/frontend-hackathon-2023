import { Drop, Trash } from "@phosphor-icons/react";
import ApexChart from "./Graph";
import secureLocalStorage from "react-secure-storage";
import { api } from "../../utils/api";
import { useEffect, useState } from "react";

const Waste = () => {
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
        "residuos/2bdf123f-f7d1-4e46-be18-b5247e6f0da0"
      );

      // console.log(response.data);

      const ultimoObjeto = response.data[response.data.length - 1];

      console.log(ultimoObjeto);
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
          heading="Nome do último resíduo"
          description={`O consumo de watts por mês foi de ${cardInfos.nome}`}
          icon={<Trash size="2.5rem" className="text-[#cf40c3]" />}
        />
        <Card1
          className="bg-[#fefaf0]"
          heading="Quantidade gasta por Dia"
          description={`O consumo de watts por dia foi de ${cardInfos.quantidade}`}
          icon={<Trash size="2.5rem" className="text-[#40ffd6]" />}
        />
        <Card1
          className="bg-[#fff4f4]"
          heading="Nível de Consumo"
          description={`O nível de consumo está ${cardInfos.nivel}.`}
          icon={<Trash size="2.5rem" className="text-[#29972e]" />}
        />
        <Card1
          className="bg-[#f3faff]"
          heading="Atualização"
          description="Ultima atualização 22/10/2023"
          icon={<Trash size="2.5rem" className="text-[#ff5926]" />}
        />
      </div>

      <div className="dark:text-white">
        <ApexChart />
      </div>
    </>
  );
};

export default Waste;
