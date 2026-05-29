export function criarMiniGrafico(variacao) {
  const tendenciaPositiva = variacao >= 0;

  const pontos = tendenciaPositiva
    ? "0,42 25,32 50,36 75,20 100,12"
    : "0,12 25,22 50,18 75,34 100,42";

  return `
    <svg
      class="mini-chart ${tendenciaPositiva ? "mini-chart-positive" : "mini-chart-negative"}"
      viewBox="0 0 100 50"
      aria-hidden="true"
    >
      <polyline
        points="${pontos}"
        fill="none"
        stroke="currentColor"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  `;
}