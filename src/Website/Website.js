import "./Website.css";

const Website = () => {
  const container = document.querySelector(".website-container");

  const website = document.createElement("article");
  website.classList.add("website-tile");
  container.appendChild(website);
  website.textContent = "123";
};

export default Website;
