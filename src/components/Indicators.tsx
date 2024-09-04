import Graph from "./Graph";
import IndicatorCard from "./IndicatorCard";
import Text from "./Text/Text";

interface IIndicators {
  renda_fixa_total: number;
  reducedValue_cdb: number;
  reducedValue_lci: number;
  reducedValue_t_direto: number;
  renda_variavel_total: string;
  renda_exterior_total: string;
  total: string;
}

const Indicators = ({
  renda_fixa_total,
  reducedValue_cdb,
  reducedValue_lci,
  reducedValue_t_direto,
  renda_variavel_total,
  renda_exterior_total,
  total,
}: IIndicators) => {
  return (
    <div style={{ display: "flex", gap: "16px" }}>
      <IndicatorCard>
        <Text style={{ width: "100%", fontSize: "20px" }}>Renda fixa</Text>
        <Text style={{ width: "100%", fontSize: "26px" }}>
          Total: {renda_fixa_total}
        </Text>
        {/* <Graph
          values={[
            Number(reducedValue_cdb),
            Number(reducedValue_lci),
            Number(reducedValue_t_direto),
          ]}
        /> */}
      </IndicatorCard>
      <IndicatorCard>
        <Text style={{ width: "100%", fontSize: "20px" }}>Renda variável</Text>
        <Text style={{ width: "100%", fontSize: "26px" }}>
          Total: {renda_variavel_total}
        </Text>
      </IndicatorCard>
      <IndicatorCard>
        <Text style={{ width: "100%", fontSize: "20px" }}>Exterior</Text>
        <Text style={{ width: "100%", fontSize: "26px" }}>
          Total: {renda_exterior_total}
        </Text>
      </IndicatorCard>
      <IndicatorCard>
        <Text style={{ width: "100%", fontSize: "20px" }}>Total</Text>
        <Text style={{ width: "100%", fontSize: "26px" }}>Total: {total}</Text>
      </IndicatorCard>
    </div>
  );
};

export default Indicators;
