import "./Hero.css";
import heroImg from "./hero-image.jpg";

const Hero = () => {
  const app = document.querySelector("#app");

  const hero = document.createElement("section");
  hero.classList.add("hero");
  app.appendChild(hero);

  const infoWrapper = document.createElement("div");
  infoWrapper.classList.add("hero-content-wrapper");
  hero.appendChild(infoWrapper);

  const heroImage = document.createElement("img");
  heroImage.classList.add("hero-image");
  infoWrapper.appendChild(heroImage);
  heroImage.src = heroImg;

  const heroText = document.createElement("article");
  heroText.classList.add("hero-text");
  infoWrapper.appendChild(heroText);
  heroText.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna sit amet purus gravida quis blandit. Lacus laoreet non curabitur gravida arcu ac. Congue quisque egestas diam in arcu cursus euismod quis viverra. Ullamcorper sit amet risus nullam eget felis eget. Pellentesque nec nam aliquam sem et tortor consequat id porta. Platea dictumst quisque sagittis purus sit amet volutpat consequat. Id neque aliquam vestibulum morbi blandit. Dignissim sodales ut eu sem integer. Leo vel orci porta non pulvinar. Mattis pellentesque id nibh tortor id aliquet lectus proin nibh.";
};

export default Hero;
