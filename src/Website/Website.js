import "./Website.css";

const Website = () => {
  const container = document.querySelector(".website-container");

  const website = document.createElement("article");
  website.classList.add("website-tile");
  container.appendChild(website);

  const screenshot = document.createElement("img");
  screenshot.src = require("../Hero/hero-image.jpg");
  screenshot.alt = "placeholder";
  screenshot.classList.add("website-screenshot");
  website.appendChild(screenshot);

  const titleWrapper = document.createElement("div");
  titleWrapper.classList.add("title-wrapper");
  website.appendChild(titleWrapper);

  const projTitle = document.createElement("div");
  projTitle.classList.add("project-title");
  projTitle.textContent = "Placeholder";
  titleWrapper.appendChild(projTitle);

  const iconWrapper = document.createElement("div");
  iconWrapper.classList.add("icon-wrapper");
  titleWrapper.appendChild(iconWrapper);

  const githubImg = document.createElement("img");
  githubImg.classList.add("icons-small");
  githubImg.src = require("../Hero/hero-image.jpg");
  iconWrapper.appendChild(githubImg);

  const externalImg = document.createElement("img");
  externalImg.classList.add("icons-small");
  externalImg.src = require("../Hero/hero-image.jpg");
  iconWrapper.appendChild(externalImg);

  const description = document.createElement("div");
  description.classList.add("description");
  website.appendChild(description);
  description.textContent =
    "Short description of the project. Just a couple sentences will do. ";
};

export default Website;
