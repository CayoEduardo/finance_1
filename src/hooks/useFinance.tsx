import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { investments } from "../mocks/investments";
import { CDB, pre_fixado, ipca, LCI, selic, DOLAR } from "../constants";
import { getReducedValue } from "../utils";

const FinanceContext = createContext({});

const FinanceProvider = ({ children }: { children: ReactNode }) => {
  const { crypto, exterior, renda_fixa, renda_variavel } = investments;
  const { cdb, lci, t_direto } = renda_fixa;

  const reducedValue_cdb = getReducedValue(cdb);
  const reducedValue_lci = getReducedValue(lci);
  const reducedValue_t_direto = getReducedValue(t_direto);

  // const inv_selic = renda_fixa.filter((investments) => {
  //   return investments.tipo === selic;
  // });

  const { acoes, etfs } = renda_variavel;
  const { etfs: etfs_americanas } = exterior;

  const [filteredInvestments, setFilteredInvestments] = useState<string[]>([
    CDB,
    pre_fixado,
    ipca,
    selic,
    LCI,
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
      value={{
        cdb,
        lci,
        t_direto,
        rendaFixa,
        filteredInvestments,
        setFilteredInvestments,
        reducedValue_cdb,
        reducedValue_lci,
        reducedValue_t_direto,
      }}
    >
      {children}
    </FinanceContext.Provider>
  );
};

export default FinanceProvider;

export const useFinance = () => {
  return useContext(FinanceContext);
};
