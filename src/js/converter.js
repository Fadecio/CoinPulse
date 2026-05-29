import { showToast } from "./toast.js";

export function converterMoeda(
  valor,
  moedaSelecionada,
  moedasRenderizadas
) {
  const valorDigitado = Number(
    String(valor).replace(",", ".")
  );

  if (!valorDigitado || valorDigitado <= 0) {
    showToast(
      "Digite um valor válido para converter",
      "error"
    );

    return {
      sucesso: false,
      mensagem: "Digite um valor válido."
    };
  }

  const moedaEncontrada =
    moedasRenderizadas.find((moeda) => {
      return moeda.code === moedaSelecionada;
    });

  if (!moedaEncontrada) {
    showToast(
      "Aguarde as cotações carregarem",
      "info"
    );

    return {
      sucesso: false,
      mensagem: "Cotação ainda não carregada."
    };
  }

  const cotacao = Number(moedaEncontrada.bid);

  const resultado =
    valorDigitado * cotacao;

  const resultadoFormatado =
    resultado.toLocaleString(
      "pt-BR",
      {
        style: "currency",
        currency: "BRL"
      }
    );

  showToast(
    "Conversão realizada com sucesso",
    "success"
  );

  return {
    sucesso: true,
    mensagem: `${valorDigitado} ${moedaSelecionada} = ${resultadoFormatado}`
  };
}