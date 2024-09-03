import { createContext, useContext, useEffect, useState } from "react";
import { investments } from "../mocks/investments";

const FinanceContext = createContext({});

const FinanceProvider = ({ children }) => {
  const { crypto, exterior, renda_fixa, renda_variavel } = investments;
  const { cdb, lci, t_direto } = renda_fixa;
  const { acoes, etfs } = renda_variavel;
  const { etfs: etfs_americanas } = exterior;

  const [filteredInvestments, setFilteredInvestments] = useState<string[]>([
    "CDB",
    "pre fixado",
    "ipca+",
    "selic",
    "LCI",
  ]);

  const [rendaFixa, setRendaFixa] = useState(
    [...cdb, ...lci, ...t_direto].filter((investment) => {
      return filteredInvestments.includes(investment.tipo);
    })
  );

  useEffect(() => {
    const result = [...cdb, ...lci, ...t_direto].filter((investment) => {
      return filteredInvestments.includes(investment.tipo);
    });
    setRendaFixa(result);
  }, [filteredInvestments]);

  return (
    <FinanceContext.Provider
      value={{ rendaFixa, filteredInvestments, setFilteredInvestments }}
    >
      {children}
    </FinanceContext.Provider>
  );
};

export default FinanceProvider;

export const useFinance = () => {
  return useContext(FinanceContext);
};
