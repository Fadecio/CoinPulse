const buscarBtn = document.getElementById('search-button');
const atualizarBtn = document.getElementById('refresh-button');
const currencyGrid = document.getElementById('currency-grid');
const moedas = "USD-BRL, EUR-BRL, BCT-BRL";

async function buscarMoedas(){
    const url = "https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL";

    try {
        const response = await fetch(url);
        const data = await response.json();
        renderizarMoedas(data);
    } catch (error) {
        console.error("Erro ao buscar moedas:", error);
    }
}

function renderizarMoedas(data) {

}

buscarMoedas();