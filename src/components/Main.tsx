import { useEffect, useState } from "react";
import axios from "axios";
import { convertToPercentage } from "../utils";
import Card1 from "./Card1";
import Text from "./Text/Text";
import Tag from "./Tag/Tag";
import Table from "./Table/Table";

const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,GBP-BRL"
        );
        console.log(response.data);
        const data2 = [
          {
            code: "USD",
            country: "US",
            codein: "BRL",
            name: "Dólar Americano",
            high: "5.6326",
            low: "5.6269",
            varBid: "0.0022",
            pctChange: "0.04",
            bid: "5.6286",
            ask: "5.6291",
            timestamp: "1724967000",
            create_date: "2024-08-29 18:30:00",
          },
          {
            country: "EU",
            code: "EUR",
            codein: "BRL",
            name: "Euro",
            high: "6.2264",
            low: "6.1737",
            varBid: "-0.0527",
            pctChange: "-0.85",
            bid: "6.1487",
            ask: "6.1987",
            timestamp: "1724985404",
            create_date: "2024-08-29 23:36:44",
          },
          {
            country: "GB",
            code: "GBP",
            codein: "BRL",
            name: "Libra Esterlina",
            high: "7.4184",
            low: "7.4063",
            varBid: "0.0024",
            pctChange: "0.03",
            bid: "7.4019",
            ask: "7.4239",
            timestamp: "1724985401",
            create_date: "2024-08-29 23:36:41",
          },
        ];

        setData(data2);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          display: "flex",
          gap: "16px",
          marginBlock: "16px",
          alignItems: "center",
        }}
      >
        <Text>Indíces:</Text>
        <div style={{ display: "flex", gap: "16px" }}>
          <Tag>Selic</Tag>
          <Tag>CDI</Tag>
          <Tag>IPCA</Tag>
        </div>
        <Text>Câmbio:</Text>
        <div style={{ display: "flex", gap: "16px" }}>
          <Tag>EUR</Tag>
          <Tag>USD</Tag>
          <Tag>GBP</Tag>
        </div>
        <Text>Crypto: (BTC)</Text>
        <div style={{ display: "flex", gap: "16px" }}>
          <Tag>BTC</Tag>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: "16px",
          overflowX: "auto",
          paddingBlock: "12px",
        }}
      >
        {data.map(({ country, code, pctChange, ask, name }) => {
          const adjustedPct = convertToPercentage(pctChange);
          return (
            <Card1
              code={country}
              name={name}
              shortName={code}
              value={ask}
              variance={adjustedPct}
            />
          );
        })}
        <Card1
          code={"BTC"}
          name={"Bitcoin"}
          shortName={"BTC"}
          value={"7.4063"}
          variance={"3%"}
        />
      </div>
      <div
        className="ag-theme-quartz" // applying the Data Grid theme
        style={{ height: 500 }} // the Data Grid will fill the size of the parent container
      >
        <Table />
      </div>
    </div>
  );
};

export default Main;
