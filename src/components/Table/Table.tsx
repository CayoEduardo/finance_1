import "ag-grid-community/styles/ag-grid.css";
// Optional Theme applied to the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import { useEffect, useState } from "react";
import { investments } from "../../mocks/investments";
import Text from "../Text/Text";
import { useFinance } from "../../hooks/useFinance";

const Table = () => {
  const { crypto, exterior, renda_fixa, renda_variavel } = investments;
  // const { cdb, lci, t_direto } = renda_fixa;
  const { acoes, etfs } = renda_variavel;
  const { etfs: etfs_americanas } = exterior;

  const DOLAR = 5.64;

  const { rendaFixa, filteredInvestments, setFilteredInvestments } =
    useFinance();

  // const [rowData, setRowData] = useState([...rendaFixa]);
  const [colDefs, setColDefs] = useState([
    { field: "nome" },
    { field: "prazo" },
    { field: "valor_aplicado" },
    { field: "valor" },
    { field: "data_aquisicao" },
    { field: "tipo" },
    { field: "tipo_taxa" },
    { field: "taxa" },
    { field: "atrelado" },
    { field: "instituicao" },
  ]);

  const [rendaFixa_2, setRendaFixa_2] = useState(
    [...rendaFixa].reduce((acc, currentValue) => {
      return acc + currentValue.valor;
    }, 0)
  );

  // const renda_fixa_2 = [...rendaFixa].reduce((acc, currentValue) => {
  //   return acc + currentValue.valor;
  // }, 0);

  const renda_fixa_total = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(rendaFixa_2);

  const renda_variavel_2 = [...etfs, ...acoes].reduce((acc, currentValue) => {
    return acc + currentValue.valor;
  }, 0);

  const renda_variavel_total = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(renda_variavel_2);

  const renda_variavel_exterior =
    [...etfs_americanas].reduce((acc, currentValue) => {
      return acc + currentValue.valor;
    }, 0) * DOLAR;

  const renda_exterior_total = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(renda_variavel_exterior);

  const total = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(
    (rendaFixa_2 + renda_variavel_2 + renda_variavel_exterior).toFixed(2)
  );

  return (
    <div>
      <div style={{ display: "flex", gap: "16px" }}>
        <div
          style={{
            marginTop: "36px",
            border: "1px solid rgba(0,0,0,0.1)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: "max-content",
            paddingInline: "24px",
            paddingBlock: "12px",
            borderRadius: "8px",
            justifyContent: "space-between",
            boxShadow:
              "0px 10px 15px -3px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1)",
          }}
        >
          <Text style={{ width: "100%", fontSize: "20px" }}>Renda fixa</Text>
          <Text style={{ width: "100%", fontSize: "26px" }}>
            Total: {renda_fixa_total}
          </Text>
        </div>{" "}
        <div
          style={{
            marginTop: "36px",
            border: "1px solid rgba(0,0,0,0.1)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: "max-content",
            paddingInline: "24px",
            paddingBlock: "12px",
            borderRadius: "8px",
            justifyContent: "space-between",
            boxShadow:
              "0px 10px 15px -3px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1)",
          }}
        >
          <Text style={{ width: "100%", fontSize: "20px" }}>
            Renda variável
          </Text>
          <Text style={{ width: "100%", fontSize: "26px" }}>
            Total: {renda_variavel_total}
          </Text>
        </div>
        <div
          style={{
            marginTop: "36px",
            border: "1px solid rgba(0,0,0,0.1)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: "max-content",
            paddingInline: "24px",
            paddingBlock: "12px",
            borderRadius: "8px",
            justifyContent: "space-between",
            boxShadow:
              "0px 10px 15px -3px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1)",
          }}
        >
          <Text style={{ width: "100%", fontSize: "20px" }}>Exterior</Text>
          <Text style={{ width: "100%", fontSize: "26px" }}>
            Total: {renda_exterior_total}
          </Text>
        </div>
        <div
          style={{
            marginTop: "36px",
            border: "1px solid rgba(0,0,0,0.1)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: "max-content",
            paddingInline: "24px",
            paddingBlock: "12px",
            borderRadius: "8px",
            justifyContent: "space-between",
            boxShadow:
              "0px 10px 15px -3px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1)",
          }}
        >
          <Text style={{ width: "100%", fontSize: "20px" }}>Total</Text>
          <Text style={{ width: "100%", fontSize: "26px" }}>
            Total: {total}
          </Text>
        </div>
      </div>
      <div
        className="ag-theme-quartz" // applying the Data Grid theme
        style={{ height: 500, marginTop: "48px" }} // the Data Grid will fill the size of the parent container
      >
        <AgGridReact rowData={rendaFixa} columnDefs={colDefs} />
      </div>
    </div>
  );
};

export default Table;
