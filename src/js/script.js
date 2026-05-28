const themeButton = document.getElementById("theme-button");

const currencyGrid = document.getElementById("currency-grid");

const buscarBtn = document.getElementById("search-button");
const atualizarBtn = document.getElementById("refresh-button");

const searchInput = document.getElementById("search-input");
let moedasRenderizadas = [];

const moedas = ["USD-BRL", "EUR-BRL", "BTC-BRL", "GBP-BRL", "ARS-BRL"];

const API_URL = `https://economia.awesomeapi.com.br/json/last/${moedas.join(",")}`;

async function buscarMoedas() {
  try {
    mostrarLoading();

    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Erro ao buscar moedas");
    }

    const data = await response.json();
    moedasRenderizadas = Object.values(data);

    renderizarMoedas(moedasRenderizadas);
  } catch (error) {
    mostrarErro();
    console.error(error);
  }
}

function pesquisarMoedas() {
  const termo = searchInput.value.toLowerCase();

  const moedasFiltradas = moedasRenderizadas.filter((moeda) => {
    return (
      moeda.code.toLowerCase().includes(termo) ||
      moeda.name.toLowerCase().includes(termo)
    );
  });

  renderizarMoedas(moedasFiltradas);
}

function renderizarMoedas(moedas) {
  currencyGrid.innerHTML = "";
  moedas.forEach((moeda) => {
    const variacao = Number(moeda.pctChange);

    const statusClass = variacao >= 0 ? "positive" : "negative";

    const simbolo = variacao >= 0 ? "+" : "";

    const precoFormatado = Number(moeda.bid).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    const card = `<article class="currency-card">
                        <div class="currency-top">
                            <div>
                                <span class="currency-symbol">
                                ${moeda.code}
                                </span>
                                
                                <h4>
                                ${moeda.name}
                                </h4>
                            </div>

                            <span class="status ${statusClass}">
                                ${simbolo}${variacao.toFixed(2)}%
                            </span>
                        </div>

                        <div class="currency-price">
                            ${precoFormatado}
                        </div>
                        <div class="currency-footer">
                            <span>
                                Atualizado agora
                            </span>
                        </div>
                    </article>
                `;

    currencyGrid.innerHTML += card;
  });
}

function mostrarLoading() {
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

function mostrarErro() {
  currencyGrid.innerHTML = `        
            <div class="error-message">
                Erro ao carregar dados.
            </div>
        
    `;
}

function alternarTema() {
  document.body.classList.toggle("light-mode");

  const temaClaroAtivo = document.body.classList.contains("light-mode");

  localStorage.setItem(
    "theme",
    temaClaroAtivo ? "light" : "dark"
  );

  atualizarTextoTema(temaClaroAtivo);
}

function carregarTema() {
  const temaSalvo = localStorage.getItem("theme");

  if (temaSalvo === "light") {
    document.body.classList.add("light-mode");
    atualizarTextoTema(true);
  }
}

function atualizarTextoTema(lightMode) {
  themeButton.textContent = lightMode ? "Dark Mode" : "Light Mode";
}

atualizarBtn.addEventListener("click", buscarMoedas);
buscarMoedas();

themeButton.addEventListener("click", alternarTema);
carregarTema();

setInterval(buscarMoedas, 30000);

searchInput.addEventListener("input", pesquisarMoedas);
