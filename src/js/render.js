import { criarMiniGrafico } from "./charts.js";

const currencyGrid = document.getElementById("currency-grid");

export function renderizarMoedas(moedas) {
  let cards = "";

  moedas.forEach((moeda) => {
    const variacao = Number(moeda.pctChange);
    const statusClass = variacao >= 0 ? "positive" : "negative";
    const simbolo = variacao >= 0 ? "+" : "";
    const valor = Number(moeda.bid);

    const precoFormatado = valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: valor < 1 ? 4 : 2,
      maximumFractionDigits: valor < 1 ? 4 : 2,
    });

    const miniGrafico = criarMiniGrafico(variacao);

    const card = `
      <article class="currency-card">
        <div class="currency-top">
          <div class="currency-title-area">
            <div>
              <span class="currency-symbol">${moeda.code}</span>
              <h4>${moeda.name}</h4>
            </div>
          </div>

          <span class="status ${statusClass}">
            ${simbolo}${variacao.toFixed(2)}%
          </span>
        </div>

        <div class="currency-price">
          ${precoFormatado}
        </div>

        <div class="mini-chart-wrapper">
          ${miniGrafico}
        </div>

        <div class="currency-footer">
          <span>Atualizado agora</span>
        </div>
      </article>
    `;

    cards += card;
  });

  currencyGrid.innerHTML = cards;
}

export function mostrarLoading() {
  currencyGrid.innerHTML = `
    <article class="currency-card">
        <div class="loading"></div>
    </article>

    <article class="currency-card">
        <div class="loading"></div>
    </article>

    <article class="currency-card">
        <div class="loading"></div>
    </article>        
    `;
}

export function mostrarErro() {
  currencyGrid.innerHTML = `        
            <div class="error-message">
                Erro ao carregar dados.
            </div>
        
    `;
}
