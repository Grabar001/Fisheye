import { getPhotographer } from "../utils/api.js";
import { Header } from "../components/Header.js";
import { Main } from "../components/Main.js";

const displayData = (dataPhotographs) => {
  const body = document.querySelector("body");
  body.innerHTML = `
        <div class="container">
        ${Header()}
        <main class="main">
        ${Main(dataPhotographs)}
        </main>
        </div>
    `;
};

(async () => {
  const data = await getPhotographer();
  // console.log(data);
  displayData(data);
})();
