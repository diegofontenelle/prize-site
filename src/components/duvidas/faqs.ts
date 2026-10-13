export type Faq = {
  question: string;
  answer: string;
  /** Começa aberta (a primeira de cada grupo, como no protótipo). */
  open?: boolean;
};

export type FaqGroup = {
  id: string;
  titleId: string;
  title: string;
  items: Faq[];
};

export const FAQ_GROUPS: FaqGroup[] = [
  {
    id: "empresas",
    titleId: "empresas-t",
    title: "Para empresas",
    items: [
      {
        question: "Como a minha empresa começa?",
        answer:
          "Fale com a gente. Depois da conversa, mandamos a proposta. Com o contrato assinado, a Prize cria o acesso da empresa e o responsável recebe o convite por e-mail.",
        open: true,
      },
      {
        question: "Como coloco saldo na Prize?",
        answer: "Pelo painel da empresa, só por Pix. Você escolhe quantos Prizes quer adicionar e paga o Pix.",
      },
      {
        question: "Preciso dos dados bancários de quem vou premiar?",
        answer: "Não. Você não precisa de agência, conta ou chave Pix de ninguém: cada pessoa saca na chave Pix do próprio CPF.",
      },
      {
        question: "Quanto tempo a pessoa leva para receber?",
        answer:
          "O convite sai por e-mail assim que você envia a premiação. Depois de criar o acesso, a pessoa saca quando quiser, e o Pix é processado na hora.",
      },
      {
        question: "Posso premiar quem não é empregado da minha empresa?",
        answer:
          "Pode. Mas a regra do art. 457 da CLT vale só para empregados: para outras pessoas, a tributação é diferente. Fale com o seu contador antes.",
      },
      {
        question: "E o Imposto de Renda?",
        answer:
          "O prêmio é rendimento de quem recebe e tem Imposto de Renda. A empresa precisa informar o pagamento; o seu contador orienta como fazer.",
      },
    ],
  },
  {
    id: "quem-recebe",
    titleId: "recebe-t",
    title: "Para quem recebe",
    items: [
      {
        question: "Como eu saco os meus Prizes?",
        answer:
          "Entre na Prize, escolha Sacar via Pix, informe a chave Pix do seu CPF e o valor e confirme com o código do autenticador.",
        open: true,
      },
      {
        question: "Por que o Pix só vai para a chave do meu CPF?",
        answer: "Por segurança: assim o dinheiro só cai numa conta no seu nome.",
      },
      {
        question: "Meu CPF não é chave Pix. E agora?",
        answer:
          "Cadastre o seu CPF como chave Pix no aplicativo do seu banco e volte para sacar. Se o saque por TED estiver liberado para você, também dá para sacar por TED.",
      },
      {
        question: "Quanto tempo o dinheiro leva para cair?",
        answer:
          "O Pix é processado na hora, mas pode levar alguns minutos. A TED é feita em dias úteis, das 6h30 às 16h30; pedida fora desse horário, sai no próximo dia útil.",
      },
      {
        question: "Esqueci a senha.",
        answer: "Na tela de entrada, use Esqueci minha senha. O link que chega no seu e-mail vale por 30 minutos.",
      },
      {
        question: "Perdi o celular com o autenticador.",
        answer:
          "Use um dos códigos de recuperação que você guardou ao criar o acesso, na opção Recuperar autenticador. Sem os códigos, procure a administração da empresa que premiou você.",
      },
      {
        question: "Prêmio tem Imposto de Renda?",
        answer: "Tem. Prêmio em dinheiro é rendimento. Para saber como declarar, fale com o RH da empresa que premiou você.",
      },
    ],
  },
];
