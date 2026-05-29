const moedas = [
  "USD-BRL",
  "EUR-BRL",
  "BTC-BRL",
  "GBP-BRL",
  "ARS-BRL",
  "JPY-BRL",
  "CHF-BRL",
  "CNY-BRL",
  "MXN-BRL",
  "PYG-BRL"
];

const API_URL = `https://economia.awesomeapi.com.br/json/last/${moedas.join(",")}`;

export async function buscarMoedas() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Erro ao buscar moedas");
  }

  const data = await response.json();

  return Object.values(data);
}
