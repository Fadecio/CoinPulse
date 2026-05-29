const themeButton = document.getElementById("theme-button");
const currencyGrid = document.getElementById("currency-grid");
const atualizarBtn = document.getElementById("refresh-button");
const searchInput = document.getElementById("search-input");
const converterValue = document.getElementById("converter-value");
const converterCurrency = document.getElementById("converter-currency");
const converterButton = document.getElementById("converter-button");
const converterResult = document.getElementById("converter-result");
const toastContainer = document.getElementById("toast-container");

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
    showToast("Cotações atualizadas com sucesso", "success");
  } catch (error) {
    mostrarErro();
    showToast("Erro ao carregar cotações", "error");
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

    const valor = Number(moeda.bid);

    const precoFormatado = valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: valor < 1 ? 4 : 2,
      maximumFractionDigits: valor < 1 ? 4 : 2,
    });

    const card = `
  <article class="currency-card">

    <div class="currency-top">
      <div class="currency-title-area">
        <div>
          <span class="currency-symbol">
            ${moeda.code}
          </span>

          <h4>
            ${moeda.name}
          </h4>
        </div>

        <!-- imagem removida -->
      </div>

      <span class="status ${statusClass}">
        ${simbolo}${variacao.toFixed(2)}%
      </span>
    </div>

    <div class="currency-price">
      ${precoFormatado}
    </div>

    <!-- imagem mobile removida -->

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

function converterMoeda() {
  const valorDigitado = Number(converterValue.value);
  const moedaSelecionada = converterCurrency.value;

  if (!valorDigitado || valorDigitado <= 0) {
    converterResult.textContent = "Digite um valor válido.";
    return;
  }

  const moedaEncontrada = moedasRenderizadas.find((moeda) => {
    return moeda.code === moedaSelecionada;
  });

  if (!moedaEncontrada) {
    converterResult.textContent = "Cotação ainda não carregada.";
    return;
  }

  const cotacao = Number(moedaEncontrada.bid);
  const resultado = valorDigitado * cotacao;

  const resultadoFormatado = resultado.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  converterResult.textContent = `${valorDigitado} ${moedaSelecionada} = ${resultadoFormatado}`;
  showToast("Conversão realizada", "success");
}

converterButton.addEventListener("click", converterMoeda);

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

  localStorage.setItem("theme", temaClaroAtivo ? "light" : "dark");

  atualizarTextoTema(temaClaroAtivo);
  showToast(
    temaClaroAtivo ? "Tema claro ativado" : "Tema escuro ativado",
    "info",
  );
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

function showToast(message, type = "info") {
  const toast = document.createElement("div");

  toast.classList.add("toast", `toast-${type}`);

  toast.textContent = message;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

atualizarBtn.addEventListener("click", buscarMoedas);
buscarMoedas();

themeButton.addEventListener("click", alternarTema);
carregarTema();

setInterval(buscarMoedas, 30000);

searchInput.addEventListener("input", pesquisarMoedas);
