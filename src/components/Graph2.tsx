import React, { useEffect } from "react";
import Chart, { Props } from "react-apexcharts";
import Card from "./Card";
import axios from "axios";
import Card1 from "./Card1";
import Text from "./Text/Text";
import Flag from "react-world-flags";

const Graph2: React.FC = () => {
  const commonOptions = {
    group: "social",
    height: "320px",
    chart: {
      zoom: {
        enabled: false,
      },
    },
  };

  const chartsData = [
    {
      id: "fb",
      type: "area",
      series: [
        {
          data: [
            { x: new Date("2024/08/07").toLocaleDateString(), y: 5.79 },
            { x: new Date("2024/08/08").toLocaleDateString(), y: 5.73 },
            { x: new Date("2024/08/09").toLocaleDateString(), y: 5.73 },
            { x: new Date("2024/08/10").toLocaleDateString(), y: 5.64 },
            { x: new Date("2024/08/11").toLocaleDateString(), y: 5.55 },
            { x: new Date("2024/08/13").toLocaleDateString(), y: 5.55 },
            { x: new Date("2024/08/14").toLocaleDateString(), y: 5.5 },
            { x: new Date("2024/08/15").toLocaleDateString(), y: 5.46 },
            { x: new Date("2024/08/16").toLocaleDateString(), y: 5.48 },
            { x: new Date("2024/08/17").toLocaleDateString(), y: 5.49 },
            { x: new Date("2024/08/18").toLocaleDateString(), y: 5.49 },
            { x: new Date("2024/08/20").toLocaleDateString(), y: 5.49 },
            { x: new Date("2024/08/21").toLocaleDateString(), y: 5.41 },
            { x: new Date("2024/08/22").toLocaleDateString(), y: 5.49 },
            { x: new Date("2024/08/23").toLocaleDateString(), y: 5.49 },
            { x: new Date("2024/08/24").toLocaleDateString(), y: 5.59 },
            { x: new Date("2024/08/25").toLocaleDateString(), y: 5.61 },
            { x: new Date("2024/08/27").toLocaleDateString(), y: 5.61 },
            { x: new Date("2024/08/28").toLocaleDateString(), y: 5.5 },
            { x: new Date("2024/08/29").toLocaleDateString(), y: 5.51 },
            { x: new Date("2024/08/30").toLocaleDateString(), y: 5.57 },
            { x: new Date("2024/08/31").toLocaleDateString(), y: 5.63 },
            { x: new Date("2024/09/01").toLocaleDateString(), y: 5.69 },
            { x: new Date("2024/09/02").toLocaleDateString(), y: 5.62 },
          ],
        },
      ],
      colors: ["#008FFB"],
    },
    {
      id: "tw",
      type: "area",
      series: [
        {
          data: [
            { x: new Date("2024/08/13").toLocaleDateString(), y: 6.19 },
            { x: new Date("2024/08/14").toLocaleDateString(), y: 6.12 },
            { x: new Date("2024/08/15").toLocaleDateString(), y: 6.16 },
            { x: new Date("2024/08/16").toLocaleDateString(), y: 6.06 },
            { x: new Date("2024/08/17").toLocaleDateString(), y: 6.06 },
            { x: new Date("2024/08/18").toLocaleDateString(), y: 5.99 },
            { x: new Date("2024/08/19").toLocaleDateString(), y: 6.01 },
            { x: new Date("2024/08/20").toLocaleDateString(), y: 6.02 },
            { x: new Date("2024/08/21").toLocaleDateString(), y: 6.02 },
            { x: new Date("2024/08/22").toLocaleDateString(), y: 6.03 },
            { x: new Date("2024/08/23").toLocaleDateString(), y: 6.03 },
            { x: new Date("2024/08/24").toLocaleDateString(), y: 6.1 },
            { x: new Date("2024/08/25").toLocaleDateString(), y: 6.1 },
            { x: new Date("2024/08/26").toLocaleDateString(), y: 6.11 },
            { x: new Date("2024/08/27").toLocaleDateString(), y: 6.21 },
            { x: new Date("2024/08/28").toLocaleDateString(), y: 6.23 },
            { x: new Date("2024/08/29").toLocaleDateString(), y: 6.21 },
            { x: new Date("2024/08/30").toLocaleDateString(), y: 6.13 },
            { x: new Date("2024/08/31").toLocaleDateString(), y: 6.15 },
            { x: new Date("2024/09/01").toLocaleDateString(), y: 6.17 },
            { x: new Date("2024/09/02").toLocaleDateString(), y: 6.22 },
            { x: new Date("2024/09/03").toLocaleDateString(), y: 6.23 },
          ],
        },
      ],
      colors: ["#1785b8"],
    },
  ];

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "https://economia.awesomeapi.com.br/json/daily/USD-BRL/30"
      );
      console.log(data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "https://economia.awesomeapi.com.br/json/daily/EUR-BRL/30"
      );
      console.log(data);
    })();
  }, []);

  return (
    <Card>
      <div style={{ width: "100%" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ marginRight: "16px" }}>
            <Flag code={"US"} style={{ width: "4rem", height: "4rem" }} />
          </div>
          <div>
            <Text style={{ fontSize: "20px", fontWeight: "500" }}>
              Dólar Americano ($USD)
            </Text>
            <Text
              style={{
                fontSize: "12px",
                marginTop: "6px",
                fontWeight: "600",
                color: "gray",
              }}
            >
              Cotação dos últimos 30 dias.
            </Text>
          </div>
        </div>
        <Chart
          options={{
            ...commonOptions,
            ...chartsData[0],
          }}
          series={chartsData[0].series}
          type={chartsData[0].type as "area"}
          height={commonOptions.height}
        />
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ marginRight: "16px" }}>
            <Flag code={"EU"} style={{ width: "4rem", height: "4rem" }} />
          </div>
          <div>
            <Text style={{ fontSize: "20px", fontWeight: "500" }}>
              Euro (€EUR)
            </Text>
            <Text
              style={{
                fontSize: "12px",
                marginTop: "6px",
                fontWeight: "600",
                color: "gray",
              }}
            >
              Cotação dos últimos 30 dias.
            </Text>
          </div>
        </div>

        <Chart
          options={{
            ...commonOptions,
            ...chartsData[1],
          }}
          series={chartsData[1].series}
          type={chartsData[1].type as "area"}
          height={commonOptions.height}
        />
      </div>
    </Card>
  );
};

export default Graph2;
