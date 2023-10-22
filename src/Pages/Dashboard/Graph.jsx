import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import secureLocalStorage from "react-secure-storage";
import { api } from "../../utils/api";
import { format } from "date-fns";

const ApexChart = () => {
  const [consumoPorHora, setConsumoPorHora] = useState([]);

  const getData = async () => {
    try {
      const token = secureLocalStorage.getItem("token");
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const response = await api.get(
        "energia/2bdf123f-f7d1-4e46-be18-b5247e6f0da0"
      );

      // console.log(response.data);

      // Transformar os dados para consumo de watts por hora
      const dadosAgrupadosPorHora = {};
      response.data.forEach((item) => {
        const dataHora = new Date(item.createdAt);
        const hora = dataHora.getHours();
        if (!dadosAgrupadosPorHora[hora]) {
          dadosAgrupadosPorHora[hora] = 0;
        }
        dadosAgrupadosPorHora[hora] += item.watts_mes.toFixed(2);
      });

      // Converter dados para o formato necessário para o gráfico
      const dadosParaGrafico = response.data.map((item) => {
        const horaFormatada = format(new Date(item.createdAt), "HH:mm");
        return {
          x: horaFormatada, // Horário formatado
          y: parseFloat(item.watts_mes.toFixed(2)), // Consumo de watts por hora com 2 casas decimais
        };
      });

      setConsumoPorHora(dadosParaGrafico);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const options = {
    chart: {
      type: "area",
      height: 350,
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    title: {
      text: "Consumo de Watts por Hora",
      align: "left",
      style: {
        fontSize: "24px", // Tamanho do título
        fontWeight: "bold", // Negrito
        color: "#333", // Cor do título
      },
    },
    xaxis: {
      type: "category",
    },
    colors: ["#00df9a"], // Defina cores vibrantes para o gráfico
    fill: {
      type: "gradient", // Use gradientes para uma aparência mais viva
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100],
      },
    },
  };

  const series = [
    {
      name: "Watts",
      data: consumoPorHora,
    },
  ];

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={350}
      />
    </div>
  );
};

export default ApexChart;
