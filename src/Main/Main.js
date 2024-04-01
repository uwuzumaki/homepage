import Website from "../Website/Website";
import "./Main.css";

const Main = () => {
  const app = document.querySelector("#app");

  const container = document.createElement("section");
  container.classList.add("website-container");
  app.appendChild(container);

  Website();
  Website();
  Website();
  Website();
};

export default Main;
