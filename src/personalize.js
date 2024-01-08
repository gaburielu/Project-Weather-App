const toggleFooterButton = document.getElementById("footer-toggle");
const footer = document.getElementById("hiddenFooter");

function toggleFooter() {
  footer.classList.toggle("hidden");
  footer.classList.toggle("show");
}

toggleFooterButton.addEventListener("click", toggleFooter);

