type CDB = {
  nome: string;
  prazo: string;
  valor_aplicado: number;
  valor: number;
  data_aquisicao: string;
  tipo: string;
  tipo_taxa: string;
  taxa: string;
  atrelado: string;
  instituicao: string;
};

type TesouroDireto = {
  nome: string;
  prazo: number;
  valor_aplicado: number;
  valor: number;
  data_aquisicao: string;
  tipo: string;
  tipo_taxa: string;
  taxa: string;
  atrelado: string;
  instituicao: string;
};

type LCI = {
  nome: string;
  prazo: string;
  valor_aplicado: number;
  valor: number;
  data_aquisicao: string;
  tipo: string;
  tipo_taxa: string;
  taxa: string;
  atrelado: string;
  instituicao: string;
};

type Acao = {
  nome: string;
  participacao_carteira: string;
  valor: number;
  qtd: number;
  instituicao: string;
};

type ETF = {
  nome: string;
  participacao_carteira: string;
  valor: number;
  qtd: number;
  instituicao: string;
};

type ETFExterior = {
  nome: string;
  participacao_carteira: string;
  valor_aportado: number;
  valor: number;
  qtd: number;
  preco_medio: number;
  instituicao: string;
};

type Crypto = {
  nome: string;
  participacao_carteira: string;
  valor_aportado: number;
  valor: number;
  qtd: number;
  preco_medio: number;
  instituicao: string;
};

export type Investments = {
  renda_fixa: {
    cdb: CDB[];
    t_direto: TesouroDireto[];
    lci: LCI[];
  };
  renda_variavel: {
    acoes: Acao[];
    etfs: ETF[];
  };
  exterior: {
    etfs: ETFExterior[];
  };
  crypto: Crypto[];
};
