import { useFinance } from "../hooks/useFinance";
import List from "./List/List";
import Tag from "./Tag/Tag";
import Text from "./Text/Text";

const Sidebar = () => {
  const { filteredInvestments, setFilteredInvestments } = useFinance();
  return (
    <aside style={{ width: "260px" }}>
      <Text style={{ fontSize: "24px" }}>Investimentos</Text>

      <Text style={{ marginTop: "16px", fontSize: "18px" }}>Renda fixa</Text>
      <List style={{ marginTop: "8px" }}>
        <li>
          <Tag
            onClick={() => {
              if (
                filteredInvestments.includes("selic") ||
                filteredInvestments.includes("ipca+") ||
                filteredInvestments.includes("pre fixado")
              ) {
                const filtered = filteredInvestments.filter((investment) => {
                  return !(
                    investment.includes("selic") ||
                    investment.includes("ipca+") ||
                    investment.includes("pre fixado")
                  );
                });
                setFilteredInvestments([...filtered]);
              } else {
                setFilteredInvestments([
                  ...filteredInvestments,
                  "selic",
                  "ipca+",
                  "pre fixado",
                ]);
              }
            }}
            active={
              filteredInvestments.includes("selic") ||
              filteredInvestments.includes("ipca+") ||
              filteredInvestments.includes("pre fixado")
            }
          >
            Tesouro direto
          </Tag>
        </li>
        <li>
          <Tag
            onClick={() => {
              if (filteredInvestments.includes("CDB")) {
                const filtered = filteredInvestments.filter((investment) => {
                  return !investment.includes("CDB");
                });
                setFilteredInvestments([...filtered]);
              } else {
                setFilteredInvestments([...filteredInvestments, "CDB"]);
              }
            }}
            active={filteredInvestments.includes("CDB")}
          >
            CDB
          </Tag>
        </li>
        <li>
          <Tag
            onClick={() => {
              if (filteredInvestments.includes("LCI")) {
                const filtered = filteredInvestments.filter((investment) => {
                  return !investment.includes("LCI");
                });
                setFilteredInvestments([...filtered]);
              } else {
                setFilteredInvestments([...filteredInvestments, "LCI"]);
              }
            }}
            active={filteredInvestments.includes("LCI")}
          >
            LCI
          </Tag>
        </li>
      </List>

      <Text style={{ marginTop: "16px", fontSize: "18px" }}>
        Renda variável
      </Text>
      <List style={{ marginTop: "8px" }}>
        <li>
          <Tag>Ações</Tag>
        </li>
        <li>
          <Tag>ETFs</Tag>
        </li>
        <li>
          <Tag>Fundos imobiliários</Tag>
        </li>
      </List>

      <Text>
        <Tag>Fundos imobiliários</Tag>
      </Text>
    </aside>
  );
};

export default Sidebar;
