import "./style.css";
import "./normalize.css";

import { render } from "./render.js";

export let location = "london";
render(location);

const submitLocation = document.getElementById("search-form");

submitLocation.addEventListener("submit", function (e) {
  e.preventDefault();
  if (document.getElementById("searchInput").value !== "") {
    location = document.getElementById("searchInput").value;
    document.getElementById("searchInput").value = "";
    render(location);
  }
});

