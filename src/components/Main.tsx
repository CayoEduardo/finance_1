import { useEffect, useState } from "react";
import axios from "axios";
import { convertToBRL, convertToPercentage, getReducedValue } from "../utils";
import Card1 from "./Card1";
import Text from "./Text/Text";
import Tag from "./Tag/Tag";
import Table from "./Table/Table";
import Indexes from "./Indexes";
import Indicators from "./Indicators";
import { investments } from "../mocks/investments";
import { useFinance } from "../hooks/useFinance";
import { DOLAR } from "../constants";
import Graph2 from "./Graph2";

const Main = () => {
  const { crypto, exterior, renda_fixa, renda_variavel } = investments;
  const { cdb, lci, t_direto } = renda_fixa;
  const { acoes, etfs } = renda_variavel;
  const { etfs: etfs_americanas } = exterior;

  const {
    rendaFixa,
    filteredInvestments,
    setFilteredInvestments,
    reducedValue_cdb,
    reducedValue_lci,
    reducedValue_t_direto,
  } = useFinance();

  const [rendaFixa_2, setRendaFixa_2] = useState(
    getReducedValue([...rendaFixa])
  );

  const renda_fixa_total = convertToBRL(rendaFixa_2);

  const renda_variavel_2 = getReducedValue([...etfs, ...acoes]);

  const renda_variavel_total = convertToBRL(renda_variavel_2);

  const renda_variavel_exterior =
    [...etfs_americanas].reduce((acc, currentValue) => {
      return acc + currentValue.valor;
    }, 0) * DOLAR;

  const renda_exterior_total = convertToBRL(renda_variavel_exterior);

  const total = convertToBRL(
    Number(
      (rendaFixa_2 + renda_variavel_2 + renda_variavel_exterior).toFixed(2)
    )
  );

  return (
    <div style={{ width: "100%", overflow: "auto" }}>
      <Indexes />
      <Indicators
        {...{
          renda_fixa_total,
          reducedValue_cdb,
          reducedValue_lci,
          reducedValue_t_direto,
          renda_variavel_total,
          renda_exterior_total,
          total,
        }}
      />
      <div
        style={{
          display: "flex",
          gap: "16px",
          marginTop: "48px",
        }}
      >
        <div style={{ display: "flex", flex: 5 }}>
          <Graph2 />
        </div>
        <div style={{ display: "flex", backgroundColor: "pink", flex: 2 }}>
          asd
        </div>
      </div>
      {/* <Table
        columns={[
          { field: "nome" },
          { field: "prazo" },
          {
            field: "valor_aplicado",
            valueFormatter: (p) => convertToBRL(p.value),
          },
          {
            field: "valor",
            valueFormatter: (p) => convertToBRL(p.value),
          },
          { field: "data_aquisicao" },
          { field: "tipo" },
          { field: "tipo_taxa" },
          { field: "taxa" },
          { field: "atrelado" },
          { field: "instituicao" },
        ]}
        data={rendaFixa}
      /> */}
    </div>
  );
};

export default Main;
