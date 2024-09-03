export function convertToPercentage(pctChange: number) {
  return pctChange + "%"; // Multiplica por 100 e formata com duas casas decimais
}

export function convertToBRL(amount: number) {
  const { format } = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return format(amount);
}

export const getReducedValue = (array: { valor: number }[]) => {
  return array.reduce((acc, currentValue) => {
    return acc + currentValue.valor;
  }, 0);
};
