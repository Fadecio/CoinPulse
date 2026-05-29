export function pesquisarMoedas(moedas, termo){
    const texto = termo.toLowerCase();

    return moedas.filter(moeda => {
        return (
            moeda.code.toLowerCase().includes(texto) ||
            moeda.name.toLowerCase().includes(texto)
        );
    });
}