import { showToast } from "./toast.js";

const themeButton = document.getElementById("theme-button");

export function alternarTema() {
  document.body.classList.toggle("light-mode");

  const temaClaroAtivo = document.body.classList.contains("light-mode");

  localStorage.setItem("theme", temaClaroAtivo ? "light" : "dark");

  atualizarTextoTema(temaClaroAtivo);

  showToast(
    temaClaroAtivo ? "Tema claro ativado" : "Tema escuro ativado",
    "info",
  );
}

export function carregarTema() {
  const temaSalvo = localStorage.getItem("theme");

  if (temaSalvo === "light") {
    document.body.classList.add("light-mode");
    atualizarTextoTema(true);
  }
}

function atualizarTextoTema(lightMode) {
  if (!themeButton) return;

  themeButton.textContent = lightMode
   ? "🌙 Tema Escuro" 
   : "☀️ Tema Claro";
}
