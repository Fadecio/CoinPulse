export function showToast(message, type = "info") {
  const toastContainer = document.getElementById("toast-container");

  if (!toastContainer) return;

  toastContainer.innerHTML = "";

  const toast = document.createElement("div");

  toast.classList.add("toast", `toast-${type}`);
  toast.textContent = message;
  toast.setAttribute("role", "status");

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}
