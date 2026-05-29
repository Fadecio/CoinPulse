import { buscarMoedas } from "./api.js";
import { renderizarMoedas, mostrarLoading, mostrarErro } from "./render.js";

import { pesquisarMoedas } from "./search.js";
import { converterMoeda } from "./converter.js";
import { alternarTema, carregarTema } from "./theme.js";

const themeButton = document.getElementById("theme-button");

const atualizarBtn = document.getElementById("refresh-button");

const searchInput = document.getElementById("search-input");

const converterValue = document.getElementById("converter-value");

const converterCurrency = document.getElementById("converter-currency");

const converterButton = document.getElementById("converter-button");

const converterResult = document.getElementById("converter-result");

let moedasRenderizadas = [];

async function carregarMoedas() {
  try {
    mostrarLoading();

    moedasRenderizadas = await buscarMoedas();

    renderizarMoedas(moedasRenderizadas);
  } catch (error) {
    mostrarErro();
    console.error(error);
  }
}

searchInput.addEventListener("input", () => {
  const moedasFiltradas = pesquisarMoedas(
    moedasRenderizadas,
    searchInput.value,
  );

  renderizarMoedas(moedasFiltradas);
});

converterButton.addEventListener("click", () => {
  const resultado = converterMoeda(
    converterValue.value,
    converterCurrency.value,
    moedasRenderizadas,
  );

  converterResult.textContent = resultado.mensagem;
});

atualizarBtn.addEventListener("click", carregarMoedas);

themeButton.addEventListener("click", alternarTema);

carregarTema();

carregarMoedas();

setInterval(carregarMoedas, 30000);
