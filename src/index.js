import "./styles.css";
import Hero from "./Hero/Hero";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

const body = document.body;
const app = document.createElement("div");
app.id = "app";
body.appendChild(app);

Hero();
Main();
Footer();
